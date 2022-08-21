import React, { Fragment, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

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
                <button>more videos</button>
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
    button {
        margin: 2rem;
        color: #000;
        border-color: #000;
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