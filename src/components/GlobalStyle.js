import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    }

    *::-webkit-scrollbar {
        width: 5px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    html {
    }

    body {
        overflow-x: hidden;
        font-family: 'Assistant', sans-serif;
    }

    h1,h2 {
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-family: 'Taviraj', serif;
        font-size: 1.5rem;
    }

    h4 {
        font-family: 'Taviraj', serif;
        font-size: 1rem;
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

    .selected {
        border: 0.8px solid #222;
        background: #3f3f3f;
    }
    .video-active {
        transform: translateX(0%);
        opacity: 1;
    }
`;


export default GlobalStyle;