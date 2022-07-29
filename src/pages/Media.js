import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Video from "../components/Video";
import video2 from '../videos/video2.mp4'


const Media = () => {
    const [videoInfoStatus, setVideoInfoStatus] = useState(false);
    return(
        <>
            <div>
                <h1 id="videos">Videos</h1>
            </div>
            <StyledVideo>
                <h2 onClick={() => setVideoInfoStatus(!videoInfoStatus)}>video1</h2>
                <VideoInformation className={`${videoInfoStatus ? "video-info-active" : ''}`} video={video2} setVideoInfoStatus={setVideoInfoStatus} videoInfoStatus={videoInfoStatus} />
            </StyledVideo>
        </>
    )
};

const VideoInformation = ({video, setVideoInfoStatus, videoInfoStatus}) => {
    return (
        <StyledVideoInformation className={`${videoInfoStatus ? "video-info-active" : ''}`}>
            <FontAwesomeIcon icon={faClose} onClick={() => setVideoInfoStatus(false)}/>
            <Video video={video}/>
            <h2>The Truth</h2> 
            <div>
                <h3>Label</h3>
                <p>Cantora Records</p>
            </div>
            <div>
                <h3>Artists</h3>
                <p>French Horn Rebellion, Burn Water</p>
            </div>
            <div>
                <h3>What</h3>
                <p>French Horn Rebellion joins the crew of talented artists including ODESZA, Bleachers, and Penguin Prison commissioned for the official remix package of Sia's "Big Girls Cry."</p>
            </div>
        </StyledVideoInformation>
    )
};

//Styles 
const StyledVideo = styled.div`
    position: relative;
    padding-top: 5rem;
    height: 100vh;
    h2 {
        cursor: pointer;
    }
    
`;
const StyledVideoInformation = styled.div`
    position: absolute;
    height: 90vh;
    top: 4rem;
    width: 70%;
    color: #f0f0f0;
    background: #231F20;
    overflow: scroll;
    transform: translateX(-100%);
    opacity: 0;
`;

export default Media;