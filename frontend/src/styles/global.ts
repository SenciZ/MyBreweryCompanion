import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100%;
    }

    html {
        height: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #313131;
        text-decoration: none;
    }
`