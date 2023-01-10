import React from "react";
import styled from "styled-components";

const Song = ({currentSong}) => {
    return (
        <SongContainer>
            <img alt={currentSong.name} src={currentSong.cover}></img>
            <SongDescription>                
                <h4>{currentSong.name}</h4>
                <p>{currentSong.artist}</p>
            </SongDescription>
        </SongContainer>
    )
};

//Styles
const SongContainer = styled.div`
    height: 10px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        display: none;
        @media only screen and (min-width: 768px) {
            display: block;
            width: 18%;
            object-fit: cover;
            padding: 0.5rem;
    }
    }
`;
const SongDescription = styled.div`
    padding: 10px;
    color: #f0f0f0;
    width: 100%;
    h4 {
        font-size: 90%;
    }
    p {
        font-size: 80%;
    }
`;
export default Song;