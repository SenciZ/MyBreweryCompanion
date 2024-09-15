import styled from "styled-components";
import { PrimaryFont } from "../../styles/styles";

export const MobileNavContainer = styled.div`
    ${PrimaryFont}
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 20;
`;

export const NavLinksContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .nav-link {
        color: #FFF;
        font-weight: 300;
        font-size: .9rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
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
    show: boolean;
}

export const InnerNavContainer = styled.div<IProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${props => props.show ? '0px' : '100%'};
    overflow: hidden;
    top: 65px;
    z-index: 1 !important;
    animation-duration: 250ms;
    background-color: ${({ theme }) => theme.colors.lightGray3};
    transition: bottom 200ms ease-in-out;

`;

