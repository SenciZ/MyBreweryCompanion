import { Link } from "react-router-dom";
import { AppLogo } from "../Logo";
import { DesktopNavContainer, NavLinksContainer } from "./styles";

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

export const DesktopNav: React.FC<IProps> = ({ classname = '' }) => {

    const renderLinks = () => {
        const links = navLinks.map((link) => {
            return (
                <Link to={ link.to } className={ link.classname }>{ link.name }</Link>
            )
        })
        return <NavLinksContainer>{ links }</NavLinksContainer>;
    }

    return (
        <DesktopNavContainer>
            <AppLogo />
                { renderLinks() }
        </DesktopNavContainer>
    );
}