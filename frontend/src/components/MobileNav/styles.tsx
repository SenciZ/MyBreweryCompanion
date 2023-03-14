import styled from "styled-components";
import { PrimaryFont } from "../../styles/styles";

export const MobileNavContainer = styled.div`
    ${PrimaryFont}
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkGray1};
    z-index: 20;
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
export const AccountCTAContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    span {
        color: #FFF;
    }

    button {
        ${PrimaryFont}
        color: #FFF;
        border: none;
        background: none;
        cursor: pointer;
        font-weight: 300;
        font-size: .9rem;
    }
`;

interface IProps {
    show: string;
}

export const InnerNavContainer = styled.div<IProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    background: red;
`;