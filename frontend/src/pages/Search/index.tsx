import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { HeroSearchField } from '../../components/HeroSearchField';
import { ResultsContainer, ResultsContainerInner, SearchContainer, SearchContainerInner } from './styles';

interface IProps {
    classname?: string;
}

export const Search: React.FC<IProps> = ({classname = ''}) => {
    const [isLoading, setIsLoading] = useState(false);
    const query = new URLSearchParams(useLocation().search).get('brewery');
    const [searchResults, setSearchResults] = useState([]);
    const [updatedQuery, setUpdatedQuery] = useState('');
    const navigate = useNavigate();

    const getSearchResults = async (e?: any) => {
        if (!!e) e.preventDefault();
        if (!!updatedQuery) {
            navigate(`/search?brewery=${updatedQuery}`);
            setUpdatedQuery('')
        } else {
            const results = await fetch(`/brewery-search?name=${query}`).then(res => res.json());
            setSearchResults( results )
        }
    }

    const updateSearchQuery = (e:any) => {
        setUpdatedQuery(e.target.value)
    }

    useEffect(() => {
        if (!query) return;
        getSearchResults();
    },[])

 

    return (
        <>
        <SearchContainer>
            <SearchContainerInner>
            <input type='text'  onChange={ updateSearchQuery }/>
            <button onClick={ getSearchResults }>Searech</button>
            </SearchContainerInner>
        </SearchContainer>
        <ResultsContainer>
            <ResultsContainerInner>
                { searchResults.map(item => <h1>{item.name}</h1>)}
            </ResultsContainerInner>
        </ResultsContainer>
        </>
    )
}
