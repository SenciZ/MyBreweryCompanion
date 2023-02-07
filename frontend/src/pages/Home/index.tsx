import React, { useContext } from 'react'
import { AppData, AppDataContext } from '../../contexts/appData';
import { HomePageContainer } from './styles';

interface IProps {
    classname?: string;
}

export const Home: React.FC<IProps> = ({classname = ''}) => {

    const appData = useContext(AppDataContext)
    return (
        <HomePageContainer>
            <h1>Home Page {appData.windowWidth}</h1>
        </HomePageContainer>
    )
}

