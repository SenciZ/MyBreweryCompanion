import React from 'react'
import { HeroSearchField } from '../../components/HeroSearchField';
import { ResultsContainer, ResultsContainerInner, SearchContainer, SearchContainerInner } from './styles';

interface IProps {
    classname?: string;
}

export const Search: React.FC<IProps> = ({classname = ''}) => {

    return (
        <>
        <SearchContainer>
            <SearchContainerInner>
            <HeroSearchField />
            </SearchContainerInner>
        </SearchContainer>
        <ResultsContainer>
            <ResultsContainerInner>
                asdfasdf
            </ResultsContainerInner>
        </ResultsContainer>
        </>
    )
}
