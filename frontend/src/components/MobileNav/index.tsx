import { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../HamburgerIcon";
import { AppLogo } from "../Logo";
import { AccountCTAContainer, InnerNavContainer, MobileNavContainer, NavLinksContainer } from "./styles";

interface IProps {
  classname?: string;
};

interface NavLink {
  name: string;
  classname: string;
  id: string;
  to: string;
}

const navLinks: NavLink[] = [
  {
    name: 'About',
    classname: 'nav-link',
    id: 'about-link',
    to: '/about'
  },
  {
    name: 'Browse Breweries',
    classname: 'nav-link',
    id: 'about-link',
    to: '/browse'
  },
]

export const MobileNav: React.FC<IProps> = ({ classname = '' }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList[!!showMenu ? 'add' : 'remove']('no-scroll');
  }, [showMenu])

  const onOpenMobileMenu = (e: any) => {
    setShowMenu(prev => !prev)
  }

  const renderLinks = useCallback(() => {
    const links = navLinks.map((link) => {
      return (
        <Link onClick={onOpenMobileMenu} key={link.name} to={link.to} className={link.classname}>{link.name}</Link>
      )
    })
    return <NavLinksContainer>{links}</NavLinksContainer>;
  }, []);

  const renderAccountCTAs = () => {
    return (
      <AccountCTAContainer>
        <button onClick={() => alert('Create Account Clicked')}>
          Create Account
        </button>
        <span>|</span>
        <button onClick={() => alert('Create Account Clicked')}>
          Sign In
        </button>
      </AccountCTAContainer>
    )
  }

  return (
    <MobileNavContainer>
      <AppLogo />
      <HamburgerIcon onClick={onOpenMobileMenu} />
      <InnerNavContainer show={showMenu}>
        {renderLinks()}
        {renderAccountCTAs()}
      </InnerNavContainer>

    </MobileNavContainer>
  );
}