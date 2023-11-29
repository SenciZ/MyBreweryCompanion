import React, { useCallback, useEffect, useState } from 'react'
import { withTheme } from 'styled-components';
import { SearchField } from '../../components/SearchField';
import SearchResultItem from '../../components/SearchResultItem';
import { IThemeProps } from '../../styles/themes';
import { BrowsePageWrapper, ResultsContainer, ResultsContainerInner, SearchContainer, SearchContainerInner } from './styles';

interface IProps extends IThemeProps {
  classname?: string;
}

const BrowseBase: React.FC<IProps> = ({ classname = '', theme }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any | null>([]);
  const [pageNumber, setPageNumber] = useState<number | null>(1);
  const [updatedQuery, setUpdatedQuery] = useState('');
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const incrementPage = () => {
    if( searchResults.length < 10 ) return
    setPageNumber(prev => prev+1)
  }
  const decrementPage = () => {
    if( pageNumber === 1 ) return
    setPageNumber(prev => prev-1)
  }

  const getSearchResults = async (e?: any) => {
    setIsLoading(true);
    e?.preventDefault();
    if(!!updatedQuery) {
      setIsLoading(true);
      const response = await fetch(`/breweries/search?name=${updatedQuery}&page=${pageNumber}`);
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
    } else {
      try {
        const response = await fetch(`/breweries?page=${pageNumber}`);
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
      };
    }

    setIsLoading(false);
  };

  const updateSearchQuery = (value: string) => {
    setPageNumber(1);
    setUpdatedQuery(value);
  };

  useEffect(() => {
    getSearchResults();
  }, [pageNumber]);

  const renderSearchResults = useCallback((): JSX.Element | JSX.Element[] => {
    if (!!hasError) return <h1>{errorMessage}</h1>
    if (searchResults === null && !!isLoading) return <h1>Loading...www</h1>
    if (searchResults === null) return;
    const content = searchResults.map((item: any) => <SearchResultItem classname='brewery-container' resultItem={item} />)
    return !!isLoading ? <h1>Loading..ddd.</h1> : content
  }, [searchResults, isLoading, errorMessage, hasError])

  return (
    <BrowsePageWrapper>
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
        </ResultsContainerInner>
      </ResultsContainer>
        <div><button onClick={decrementPage} disabled={ pageNumber === 1 }>{`<`}</button> {pageNumber} <button disabled={searchResults < 10} onClick={incrementPage}>{`>`}</button></div>
    </BrowsePageWrapper>
  )
}

export const Browse = withTheme(BrowseBase);