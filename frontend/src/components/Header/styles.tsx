import styled from "styled-components";
import { MaxBoundaryContainer } from "../../styles/components/containers";
import { FlexCenter, FlexCol, FlexColCenter } from "../../styles/styles";

export const HeaderContainer = styled.header`
    ${FlexColCenter}
    z-index: 100;
    min-width: 100%;
    background: ${({ theme }) => theme.colors.primary }
`;

export const NavBarContainer = styled(MaxBoundaryContainer)`
    height: 50px;
`;

export const MobileNavContainer = styled.div`
    z-index: 10;
    position: fixed;
    left: 0;
    top: 52px;
    width: 100vw;
    background: rgba(233,233,233);
    height: 100vh;
`;