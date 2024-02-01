import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { FlexCol, PrimaryFont } from "../../styles/styles";

export const SearchContainer = styled(Section)``;

export const SearchContainerInner = styled(MaxBoundaryContainer)`
  ${FlexCol}
  align-items: center;
  width: 100%;
`;

export const ResultsContainer = styled(Section)``;

export const ResultsContainerInner = styled(MaxBoundaryContainer)`
  min-height: 95vh;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;
