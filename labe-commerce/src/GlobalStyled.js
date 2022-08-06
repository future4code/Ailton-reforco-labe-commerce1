import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
        --soft-white: #f2f2f2;
    }

    * {
        margin: 0;
        padding: 0;
        /* background-color: white; */
        border-sizing: border-box;
    } 
`