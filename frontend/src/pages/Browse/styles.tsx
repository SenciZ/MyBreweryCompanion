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
  dislay: flex;
  justify-content: center;

  .brewery-container {
    ${PrimaryFont}
    font-size: 14px; 
    border-top: 1px solid red;
    display: flex;
    justify-content: space-between;
    height 70px;
    padding: 5px;

        img {
            height: 100%;
            width: auto;
        }
    }
    .search-page-search {
        background: red;
    }
`;
