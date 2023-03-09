import styled from "styled-components";
import { MaxBoundaryContainer } from "../../styles/containers";

export const FooterContainer = styled.footer`
    height: 140px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FooterContainerInner = styled(MaxBoundaryContainer)``