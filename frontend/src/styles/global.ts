import { createGlobalStyle } from "styled-components";
import { PrimaryFont } from "./styles";

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100%;
    }

    html {
        height: 100%;
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