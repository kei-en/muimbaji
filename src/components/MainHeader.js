import React from "react";
import styled from "styled-components";
import HeaderImg from '../img/jamaal-cooks-40NZJF2d4qA-unsplash.jpg';

const MainHeader = () => {
    return (
        <Header>
            <img src={HeaderImg} alt="woman looking up" />
            <Title>
                <h2>I'm fine (Blackmanchant Remix) Out Now</h2>
                <button>Stream/Download</button>
            </Title>
        </Header>
    )
};

//Styles
const Header = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 15rem 2rem;
    width: 40%;
    h2 {
        color: white;
        padding: 1rem;
    }
    button {
        margin: 0rem 1rem;
    }
`;

export default MainHeader;