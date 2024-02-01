import styled from "styled-components";
import { MaxBoundaryContainer, Section } from "../../styles/containers";
import { FlexCol, PrimaryFont } from "../../styles/styles";

export const SearchContainer = styled(Section)`
`;

export const BrowsePageWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGray3};
    min-height: 100%;
`;

export const SearchContainerInner = styled(MaxBoundaryContainer)`
    ${FlexCol}
    align-items: center;
    width: 100%;
`;

export const ResultsContainer = styled(Section)`
`;

export const ResultsContainerInner = styled(MaxBoundaryContainer)`
    min-height: 100vh;
    display: flex;
    flex-flow: wrap;
    gap: 10px;
    justify-content: space-between;
`;
