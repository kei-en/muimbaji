import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
    }

    body {
        overflow-x: hidden;
    }

    h1,h2,h3,h4 {
        text-transform: uppercase;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    button {
        text-transform: uppercase;
        font-size: .9rem;
        cursor: pointer;
        padding: .8rem 1.5rem;
        border: 1.5px solid #fff;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        transition: 0.3s ease-in-out;
        
        &:hover {
            background-color: #45C4B0;
            color: white;
            border: none;
        }
    }
`;


export default GlobalStyle;