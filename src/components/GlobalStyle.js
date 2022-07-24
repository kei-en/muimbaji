import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1700px) {
            font-size: 75%;
        }
    }

    body {
        overflow-x: hidden;
    }

    h1,h2,h3,h4 {
        text-transform: uppercase;
    }

    button {
        text-transform: uppercase;
        font-size: .9rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 1.5px solid #fff;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        transition: 0.3s ease-in-out;
        
        &:hover {
            background-color: #23cdd9;
            color: white;
            border: none;
        }
    }
`;


export default GlobalStyle;