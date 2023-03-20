import React from 'react'
import { Counter } from '../../components/Counter';
import { HomePageHero } from '../../components/HomePageHero';
import { useAppData } from '../../contexts/appData';
import { HomePageContainer, HomePageInnerContainer } from './styles';

interface IProps {
  classname?: string;
}

export const Home: React.FC<IProps> = ({ classname = '' }) => {

  const { windowWidth, isDesktop } = useAppData()
  return (
    <>
      <HomePageHero />
      <img src='https://s3.amazonaws.com/logos.brewerycompanion/confluence_brewing_logo.png' alt='confluence' />
    </>
  )
}

