import styled from "styled-components";
import { PrimaryFont, SecondaryFont } from "../../styles/styles";

export const HeroSearchFieldContainer = styled.div`
   background-color: #FFF;
   border-radius: 15px;
   height: 3rem;
   width: 90%;
   display: flex;
   justify-content: space-between;

   input {
    ${SecondaryFont}
    width: 85%;
    border-radius: 15px 0 0 15px;
    border: none;
    padding: 10px;
    font-size: 1.125rem;
   }

   button {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: #FFF;
    width: 15%;
    border-radius: 0 15px 15px 0;
    border: none;
    cursor: pointer;
   }

   .screen-reader-only {
    position: absolute;
    left: -6000px;
   }
`;