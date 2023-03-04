import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./styles";


export const GlobalStyle = createGlobalStyle`
    * {
        ${PrimaryFont}
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #313131;
    }
`

// export const GlobalStyles = createGlobalStyle`
//   body.no-scroll {
//     overflow: hidden;
//   }

//   * {
//     ${SecondaryFont}
//     margin: 0;
//     padding: 0;
//     color: ${({ theme }) => theme.colors.darkGray1};
//     line-height: 1.3em;
//     box-sizing: border-box;

//     &:focus-visible {
//       outline: 1px dashed ${({ theme }) => theme.colors.darkGray1};
//       outline-offset: 1px;
//     }
//   }

//   p {
//     margin-bottom: 1rem;
//     line-height: 23px;
//   }

//   ul {
//     margin-bottom: 1rem;
//     padding-left: 40px;
//     list-tyle-type: disc;
//   }

//   .bold {
//     font-weight: bold;
//   }
// `;