import React from "react";
import styled from "styled-components";
import HeaderImg from '../img/jamaal-cooks-40NZJF2d4qA-unsplash.jpg';
import { motion } from "framer-motion";
import { fade, titleAnim } from "../animation";
import { Hide } from "../styles";

const MainHeader = () => {
    return (
        <Header>
            <img src={HeaderImg} alt="woman looking up" />
            <Title>
                <Hide>                    
                    <motion.h2 variants={titleAnim}>I'm fine (Blackmanchant Remix)</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>Out Now</motion.h2>
                </Hide>
                <motion.button variants={fade}>Stream/Download</motion.button>
            </Title>
        </Header>
    )
};

//Styles
const Header = styled.div`
    position: relative;
    background-color: #000;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
    }
`;
const Title = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 2rem 5rem 2rem;
    h2 {
        color: white;
        padding: 1rem;
    }
    button {
        margin: 0rem 1rem;
    }
`;

export default MainHeader;