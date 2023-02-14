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
      <MobileNavContainer>
        <nav>
          <ul>
            <li><a href='#'>Link 1</a></li>
            <li><a href='#'>Link 2</a></li>
            <li><a href='#'>Link 3</a></li>
          </ul>
        </nav>
      </MobileNavContainer>
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