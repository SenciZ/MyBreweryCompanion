import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { SearchField } from '../../components/SearchField';
import { ResultsContainer, ResultsContainerInner, SearchContainer, SearchContainerInner } from './styles';

interface IProps {
    classname?: string;
}

export const Search: React.FC<IProps> = ({classname = ''}) => {
    const [isLoading, setIsLoading] = useState(false);
    const query = new URLSearchParams(useLocation().search).get('brewery');
    const [searchResults, setSearchResults] = useState<any | null>(null);
    const [updatedQuery, setUpdatedQuery] = useState('');
    const navigate = useNavigate();

    const getSearchResults = async (e?: any) => {
        setIsLoading(true);
        if (!!e) e.preventDefault();
        if (!!updatedQuery) {
            navigate(`/search?brewery=${updatedQuery}`);
            setUpdatedQuery('');
            setIsLoading(false);
        } else {
            const results = await fetch(`/brewery-search?name=${query}`).then(res => res.json());
            setSearchResults(results);
            setIsLoading(false);
        };
    };

    const updateSearchQuery = (value: string) => {
        setUpdatedQuery(value);
    };

    useEffect(() => {
        if (!query) return;
        getSearchResults();
    },[query]);

    const renderSearchResults = useCallback((): JSX.Element | JSX.Element[] => {
        const content = searchResults.map((item:any) => <h1>{item.name}</h1>);
        return !!isLoading ? <h1>loading...</h1> : content
     } , [searchResults, isLoading])
 
    return (
        <>
            <SearchContainer>
                <SearchContainerInner>
                    <SearchField
                        searchString={updatedQuery}
                        onChangeSearchString={ updateSearchQuery }
                        onSearchSubmit={getSearchResults}
                     />
                </SearchContainerInner>
            </SearchContainer>
            <ResultsContainer>
                <ResultsContainerInner>
                    { renderSearchResults() }
                </ResultsContainerInner>
            </ResultsContainer>
        </>
    )
}
