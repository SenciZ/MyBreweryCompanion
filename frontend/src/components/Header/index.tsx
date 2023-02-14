import React from 'react'
import { useAppData } from '../../contexts/appData';
import { HeaderContainer, MobileNavContainer, NavBarContainer } from './styles';

type IProps = {
  classname?: string;
}

export const Header: React.FC<IProps> = ({ classname = '' }) => {
  const { windowWidth, isDesktop } = useAppData();

  const renderMobileNav = () => {
    return (
      <MobileNavContainer />
    )
  }

  const renderDesktopNav = () => {
    return (
      <div>Desktop Nav</div>
    )
  }

  const renderNavigation = () => {
    if (!!isDesktop) return renderDesktopNav();
    return renderMobileNav();
  }
  return (
    <HeaderContainer>
      <NavBarContainer className={'navBarContainer' + classname}>
      { renderNavigation() }
      </NavBarContainer>
    </HeaderContainer>
  )
}