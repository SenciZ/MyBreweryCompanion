import React from 'react'
import { useAppData } from '../../contexts/appData';
import { NavBarContainer } from './styles';

type IProps = {
    classname?: string;
}

export const NavBar: React.FC<IProps> = ({ classname = '' }) => {
  const { windowWidth } = useAppData();
  return (
    <NavBarContainer className={ classname }>NavBar{windowWidth}</NavBarContainer>
  )
}