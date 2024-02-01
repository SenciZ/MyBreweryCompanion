import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./styles";

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
    }

    html {
        min-height: 100vh;
    }

    body.no-scroll {
        overflow: hidden;
    }
    
    * {
        ${PrimaryFont}
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #313131;
        text-decoration: none;
    }
`