import React from 'react'
import { Counter } from '../../components/Counter';
import { useAppData } from '../../contexts/appData';
import { HomePageContainer, HomePageInnerContainer } from './styles';

interface IProps {
    classname?: string;
}

export const Home: React.FC<IProps> = ({classname = ''}) => {

    const { windowWidth, isDesktop } = useAppData()
    return (
        <HomePageContainer>
            <HomePageInnerContainer>
            <h1>Home Page {windowWidth}{isDesktop.toString()}</h1>
            <Counter />
            </HomePageInnerContainer>
        </HomePageContainer>
    )
}

