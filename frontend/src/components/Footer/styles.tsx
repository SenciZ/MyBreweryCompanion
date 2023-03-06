import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";

export const FooterContainer = styled.footer`
    height: 140px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    margin-top: 30px;
`;

export const FooterContainerInner = styled(MaxBoundaryContainer)``