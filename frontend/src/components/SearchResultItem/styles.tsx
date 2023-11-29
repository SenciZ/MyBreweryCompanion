import styled from "styled-components";
import { FlexCol } from "../../styles/styles";

export const ResultItemContainer = styled.div`
  ${FlexCol}
  justify-content: center;
  align-items: center;
  width: 235px;
  max-height: 235px;
  height: 235px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray1};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;

  img {
    max-width: 50%;
    height: 105px;
    margin-bottom: 20px;
  }

  .brewery-website {
    font-size: 12px;
  }
`;