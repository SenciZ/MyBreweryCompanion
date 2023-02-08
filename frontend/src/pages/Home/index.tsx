import React, { useContext } from 'react'
import { useAppData } from '../../contexts/appData';
import { HomePageContainer } from './styles';

interface IProps {
    classname?: string;
}

export const Home: React.FC<IProps> = ({classname = ''}) => {

    const { windowWidth, isDesktop } = useAppData()
    return (
        <HomePageContainer>
            <h1>Home Page {windowWidth}{isDesktop.toString()}</h1>
        </HomePageContainer>
    )
}

