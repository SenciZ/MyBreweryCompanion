import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { withTheme } from 'styled-components';
import { SearchField } from '../../components/SearchField';
import SearchResultItem from '../../components/SearchResultItem';
import { IThemeProps } from '../../styles/themes';
import { ResultsContainer, ResultsContainerInner, SearchContainer, SearchContainerInner } from './styles';

interface IProps extends IThemeProps {
  classname?: string;
}

const SearchBase: React.FC<IProps> = ({ classname = '', theme }) => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search).get('query');
  const page = new URLSearchParams(useLocation().search).get('page');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any | null>(null);
  const [pageNumber, setPageNumber] = useState<number | null>(0);
  const [updatedQuery, setUpdatedQuery] = useState('');
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  console.log('rerender')

  const incrementPage = () => {
    setPageNumber(prev => prev+1)
    navigate(`/search?query=${updatedQuery || query}${!!pageNumber ? `&page=${pageNumber || page}` : `&page=${page}`}`);
    getSearchResults();
  }
  const decrementPage = () => {
    setPageNumber(prev => prev-1)
    navigate(`/search?query=${updatedQuery || query}${!!pageNumber ? `&page=${pageNumber || page}` : `&page=${page}`}`);
    getSearchResults();
  }

  const getSearchResults = async (e?: any) => {
    setIsLoading(true);
    e?.preventDefault();
    if (!!updatedQuery) {
      navigate(`/search?query=${updatedQuery}${!!pageNumber ? `&page=${pageNumber || page}` : `&page=${page}`}`);
      setUpdatedQuery('');
      setIsLoading(false);
    } else {
      try {
        setIsLoading(true);
        const response = await fetch(`/breweries?name=${query}${!!pageNumber ? `&page=${pageNumber}` : `&page=${page}`}`);
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
  }, [query, pageNumber]);

  const renderSearchResults = useCallback((): JSX.Element | JSX.Element[] => {
    if (!!hasError) return <h1>{errorMessage}</h1>
    if (searchResults === null && !!isLoading) return <h1>Loading...</h1>
    if (searchResults === null) return;
    const content = searchResults.map((item: any) => <SearchResultItem classname='brewery-container' resultItem={item} />)
    return !!isLoading ? <h1>Loading...</h1> : content
  }, [searchResults, isLoading, pageNumber])

  return (
    <>
      <SearchContainer>
        <SearchContainerInner>
          <SearchField
            searchString={updatedQuery}
            onChangeSearchString={updateSearchQuery}
            onSearchSubmit={getSearchResults}
          />
        </SearchContainerInner>
      </SearchContainer>
      <ResultsContainer>
        <ResultsContainerInner>
          {renderSearchResults()}
          <h1 style={{color: theme.colors.secondary}}>asdfasdf</h1>
        </ResultsContainerInner>
      </ResultsContainer>
        <div><button onClick={decrementPage}>{`<`}</button> {page || 1} <button onClick={incrementPage}>{`>`}</button></div>
    </>
  )
}

export const Search = withTheme(SearchBase);