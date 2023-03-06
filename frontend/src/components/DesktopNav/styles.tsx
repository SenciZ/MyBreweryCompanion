import styled from "styled-components";
import { PrimaryFont } from "../../styles/styles";

export const DesktopNavContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkGray1};
    ${PrimaryFont}
`;

export const NavLinksContainer = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 70px;
    gap: 50px;

    .nav-link {
        color: #FFF;
        font-weight: 300;
        font-size: .9rem;
    }
`;