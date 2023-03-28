import { useCallback } from "react";
import { Link } from "react-router-dom";
import { AppLogo } from "../Logo";
import { AccountCTAContainer, DesktopNavContainer, InnerNavContainer, NavLinksContainer } from "./styles";

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
        to: '/search'
    },
]

export const DesktopNav: React.FC<IProps> = ({ classname = '' }) => {

    const renderLinks = useCallback(() => {
        const links = navLinks.map((link) => {
            return (
                <Link key={link.name} to={ link.to } className={ link.classname }>{ link.name }</Link>
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

    return (
        <DesktopNavContainer>
            <AppLogo />
            <InnerNavContainer>
                { renderLinks() }
                { renderAccountCTAs() }
            </InnerNavContainer>
        </DesktopNavContainer>
    );
}