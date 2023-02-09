import styled from "styled-components";

export const HeaderContainer = styled.header`
    min-width: 100%;
    background: ${({ theme }) => theme.colors.primary }
`;

export const NavBarContainer = styled.nav`
    width: 90%;
    max-width: 1040px;
    height: 50px;
    background: ${({theme}) => theme.colors.secondary };
`;