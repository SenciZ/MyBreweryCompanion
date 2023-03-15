import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
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

    const renderLinks = useCallback(() => {
        const links = navLinks.map((link) => {
            return (
                <Link onClick={onOpenMobileMenu} key={link.name} to={ link.to } className={ link.classname }>{ link.name }</Link>
            )
        })
        return <NavLinksContainer>{ links }</NavLinksContainer>;
    },[]);

    const renderAccountCTAs = () => {
        return (
            <AccountCTAContainer>
                <button onClick={ () => alert('Create Account Clicked') }>
                    Create Account
                </button>
                <span>|</span>
                <button onClick={ () => alert('Create Account Clicked') }>
                    Sign In
                </button>
            </AccountCTAContainer>
        )
    }

    const [showMenu, setShowMenu] = useState(false);

    const onOpenMobileMenu = (e:any) => {
        if (e.target.tagName === 'A') {
            document.body.style.overflow = 'visible';  
        }
        if (!!showMenu) {
            document.body.style.overflow = 'visible';  
        } else {
            document.body.style.overflow = 'hidden';
        }
        setShowMenu(prev => !prev)
    }

    return (
        <MobileNavContainer>
            <AppLogo />
            <button onClick={ onOpenMobileMenu }>MENu</button>
                <InnerNavContainer  show={showMenu}>
                    { renderLinks() }
                    { renderAccountCTAs() }
                </InnerNavContainer>

        </MobileNavContainer>
    );
}