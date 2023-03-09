import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { FlexCol } from "../../styles/styles";

export const SearchContainer = styled(Section)``;

export const SearchContainerInner = styled(MaxBoundaryContainer)`
    ${FlexCol}
    align-items: center;
`;

export const ResultsContainer = styled(Section)``;

export const ResultsContainerInner = styled(MaxBoundaryContainer)`
    min-height: 95vh;
`;
