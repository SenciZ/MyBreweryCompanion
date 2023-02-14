import styled from "styled-components";
import { MaxBoundaryContainer } from "../../styles/components/containers";
import { FlexCenter, FlexCol, FlexColCenter } from "../../styles/styles";

export const HeaderContainer = styled.header`
    ${FlexColCenter}
    min-width: 100%;
    background: ${({ theme }) => theme.colors.primary }
`;

export const NavBarContainer = styled(MaxBoundaryContainer)`
    height: 50px;
`;