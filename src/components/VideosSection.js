import React, { Fragment, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VideosSection = () => {
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.addEventListener(
            "contextmenu",
            (e) => e.preventDefault(),
            false
        );

        return videoRef.current.removeEventListener(
            "contextmenu",
            (e) => e.preventDefault(),
            false
        );
    }, []);
    
    return (
        <VideosContainer>
            <h2>New Video</h2>
            <Video>                
                <Fragment>
                    <div ref={videoRef}></div>
                    <ReactPlayer 
                        width='70%'
                        height='70%'
                        controls={true}
                        url={"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}
                        config={{ file: { attributes: { controlsList: "nodownload" } } }}
                    />
                </Fragment>
                <Link to="/media">more videos</Link>
            </Video>
            <Hidden />
        </VideosContainer>
    )
};

//Styles
const VideosContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
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
        color: #000;
        border: 1px solid #000;
        transition: 0.3s ease-in-out;
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
    width: 100%;
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