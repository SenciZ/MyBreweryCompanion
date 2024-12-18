import React from 'react'
import { useAppData } from '../../contexts/appData';
import { DesktopNav } from '../DesktopNav';
import { MobileNav } from '../MobileNav';
import { HeaderContainer, NavBarContainer } from './styles';

type IProps = {
  classname?: string;
}

export const Header: React.FC<IProps> = ({ classname = '' }) => {
  const { isDesktop } = useAppData();

  const renderNavigation = () => {
    if (!!isDesktop) return <DesktopNav />;
    return <MobileNav />;
  }
  return (
    <HeaderContainer>
      <NavBarContainer className={'navBarContainer' + classname}>
      { renderNavigation() }
      </NavBarContainer>
    </HeaderContainer>
  )
}