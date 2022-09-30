import React, { Fragment, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const VideosSection = ({currentVideo, videos}) => {
    
    return (
        <>
            <VideosContainer>
                <h2>New Video</h2>
                <VideoPlayer currentVideo={videos[0]} />
                <Hidden />
                <Link to="/media">more videos</Link>
            </VideosContainer>
        </>
    )
};

//Styles
const VideosContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000;
    color: #fff;
    h2 {
        padding: 2rem 0rem;
    }
    a {
        text-transform: uppercase;
        font-size: .9rem;
        font-weight: 500;
        text-decoration: none;
        padding: .8rem 1.5rem;
        margin: 2rem;
        margin-top: 4rem;
        color: #000;
        border: 1px solid #000;
        transition: 0.3s ease-in-out;
        z-index: 2;
        &:hover {
            background-color: #45C4B0;
            color: white;
            border: none;
        }
    }
`;
const Video = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    z-index: 2;    
`;
const Hidden = styled.div`
    background: #fff;
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    z-index: 1;
`;

export default VideosSection;