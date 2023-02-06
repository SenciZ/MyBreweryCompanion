import React from 'react'
import { NavBarContainer } from './styles';

type IProps = {
    classname?: string;
}

export const NavBar: React.FC<IProps> = ({ classname = '' }) => {
  return (
    <NavBarContainer className={ classname }>NavBar</NavBarContainer>
  )
}