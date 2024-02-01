import styled from "styled-components";
import { PrimaryFont, SecondaryFont } from "../../styles/styles";

export const HeroSearchFieldContainer = styled.form`
   background-color: #FFF;
   border-radius: 100px;
   height: 3rem;
   width: 90%;
   display: flex;
   justify-content: space-between;
   position: relative;

   .error-message {
      position: absolute;
      color: red;
      top: calc(100% + 10px);
   }

   input {
    ${SecondaryFont}
    width: 85%;
    border-radius: 100px 0 0 100px;
    border: none;
    padding: 10px;
    font-size: 1.125rem;
   }

   button {
      ${PrimaryFont}
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: #FFF;
    width: 15%;
    border-radius: 0 100px 100px 0;
    border: none;
    cursor: pointer;
   }

   .screen-reader-only {
    position: absolute;
    left: -6000px;
   }
`;