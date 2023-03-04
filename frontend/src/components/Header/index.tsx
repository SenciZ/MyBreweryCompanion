import React from 'react'
import { Link } from 'react-router-dom';
import { useAppData } from '../../contexts/appData';
import { DesktopNav } from '../DesktopNav';
import { HamburgerIcon } from '../HamburgerIcon';
import { HeaderContainer, NavBarContainer } from './styles';

type IProps = {
  classname?: string;
}

export const Header: React.FC<IProps> = ({ classname = '' }) => {
  const { isDesktop } = useAppData();

  const renderNavigation = () => {
    if (!!isDesktop) return <DesktopNav />;
    return 'Hello';
  }
  return (
    <HeaderContainer>
      <NavBarContainer className={'navBarContainer' + classname}>
      {/* <HamburgerIcon /> */}
      { renderNavigation() }
      </NavBarContainer>
    </HeaderContainer>
  )
}