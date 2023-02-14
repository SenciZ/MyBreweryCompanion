import React from 'react'
import { useAppData } from '../../contexts/appData';
import { HeaderContainer, NavBarContainer } from './styles';

type IProps = {
  classname?: string;
}

export const Header: React.FC<IProps> = ({ classname = '' }) => {
  const { windowWidth } = useAppData();
  return (
    <HeaderContainer>
      <NavBarContainer className={'navBarContainer' + classname}>NavBar{windowWidth}</NavBarContainer>
    </HeaderContainer>
  )
}