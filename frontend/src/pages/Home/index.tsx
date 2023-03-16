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
    </>
  )
}

