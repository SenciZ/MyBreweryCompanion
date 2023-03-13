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
    const [ hasError, setHasError] = useState(false)

    const getSearchResults = async (e?: any) => {
        setIsLoading(true);
        e?.preventDefault();
        if (!!updatedQuery) {
            navigate(`/search?brewery=${updatedQuery}`);
            setUpdatedQuery('');
            setIsLoading(false);
        } else {
            try {
                const response = await fetch(`/brewery-search?name=${query}`);
                const result = await response.json();
                setSearchResults(result)
                setHasError(false)
            } catch (err) {
                setHasError(true)
                console.log(err);
            }
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
        if (searchResults === null) return;
        if (!!searchResults.message) {
            return !!isLoading ? <h1>loading...</h1> : <h1>{searchResults.message}</h1>
        }
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
                    {!!hasError ? <h1> herro </h1> : renderSearchResults() }
                </ResultsContainerInner>
            </ResultsContainer>
        </>
    )
}
