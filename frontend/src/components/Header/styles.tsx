import styled from "styled-components";
import { MaxBoundaryContainer } from "../../styles/containers";
import { FlexColCenter } from "../../styles/styles";

export const HeaderContainer = styled.header`
    ${FlexColCenter}
    z-index: 100;
    min-width: 100%;
    background: ${({ theme }) => theme.colors.tertiary }
`;

export const NavBarContainer = styled(MaxBoundaryContainer)`
    padding: 5px 0;
`;
