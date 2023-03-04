import { Link } from "react-router-dom";
import { AppLogo } from "../Logo";
import { DesktopNavContainer } from "./styles";

interface IProps {
    classname?: string;
};

interface NavLink {
    name: string;
    classname: string;
    to: string;
}

const navLinks: NavLink[] = [
    {
        name: 'About',
        classname: 'about-link',
        to: '/about'
    },
    {
        name: 'Browse Breweries',
        classname: 'browse-link',
        to: '/browse'
    },
]

export const DesktopNav: React.FC<IProps> = ({ classname = '' }) => {

    const renderLinks = () => {
        const links = navLinks.map((link) => {
            return (
                <Link to={link.to}>{link.name}</Link>
            )
        })
        return links;
    }

    return (
        <DesktopNavContainer>
            <AppLogo />
            {renderLinks()}
        </DesktopNavContainer>
    );
}