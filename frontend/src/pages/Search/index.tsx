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
    const [ errorMessage, setErrorMessage] = useState('');

    const getSearchResults = async (e?: any) => {
        setIsLoading(true);
        e?.preventDefault();
        if (!!updatedQuery) {
            navigate(`/search?brewery=${updatedQuery}`);
            setUpdatedQuery('');
            setIsLoading(false);
        } else {
            try {
                setIsLoading(true);
                const response = await fetch(`/brewery-search?name=${query}`);
                const result = await response.json();
                if (response.ok) {
                    setSearchResults(result)
                    setHasError(false)
                } else {
                    setSearchResults(null);
                    setHasError(true)
                    setErrorMessage(result.message)
                    console.log(result.message, 'else result.message')
                }
            } catch (err) {
                setHasError(true)
            }
        };
        setIsLoading(false);
    };

    const updateSearchQuery = (value: string) => {
        setUpdatedQuery(value);
    };

    useEffect(() => {
        if (!query) return;
        getSearchResults();
    },[query]);

    const renderSearchResults = useCallback((): JSX.Element | JSX.Element[] => {
        if (searchResults === null && !!isLoading) return <h1>Loading...</h1>
        if (searchResults === null) return;
        const content = searchResults.map((item:any) => <h1>{item.name}</h1>);
        return !!isLoading ? <h1>Loading...</h1> : content
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
                    {!!hasError ? <h1>{errorMessage}</h1> : renderSearchResults() }
                </ResultsContainerInner>
            </ResultsContainer>
        </>
    )
}
