import styled from "styled-components";
import { MaxBoundaryContainer } from "../../styles/containers";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FooterContainerInner = styled(MaxBoundaryContainer)``;