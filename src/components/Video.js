import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import VideoPlayer from "./VideoPlayer";

const Video = ({currentVideo, status, setStatus}) => {
    
    return (
        <VideoWrapper  onClick={() => {setStatus(false)}}>
            <VideoContainer className={`${!status ? 'video-active' : ""}`} onClick={(e) => e.stopPropagation()}>
                <button onClick={() => {setStatus(false)}}>
                    <FontAwesomeIcon className="close" icon={faClose} />
                </button>  
                <VideoDetailsContainer>
                    <VideoPlayer currentVideo={currentVideo} />
                    <h2>{currentVideo.name}</h2>
                    <Details>
                        <div className="label">                            
                            <h3>Label</h3>
                            <p>Darkhorse Whatever</p>
                        </div>
                        <div className="label">                            
                            <h3>Written by</h3>
                            <p>{currentVideo.writer}</p>
                        </div>
                        <div className="label">                            
                            <h3>Produced by</h3>
                            <p>{currentVideo.producer}</p>
                        </div>
                        <div className="label">                            
                            <h3>Mixed by</h3>
                            <p>{currentVideo.mixer}</p>
                        </div>
                        <div className="label">                            
                            <h3>What</h3>
                            <p>{currentVideo.what}</p>
                        </div>
                    </Details>
                </VideoDetailsContainer>              
            </VideoContainer>
        </VideoWrapper>
    )
};

//Styles
const VideoWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 100;
    display: flex;
    /* justify-content: flex-end; */
`;
const VideoContainer = styled.div`
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
    opacity: 0;
    background: #231f20;
    width: 80%;
    color: #f0f0f0;
    position: fixed;
    height: 100vh;
    overflow: scroll;
    padding-top: 5rem;
    .video-active {
        transform: translateX(0%);
        opacity: 1;
    }
    button {
        border: none;
        &:hover {
            background: transparent;
        }
        .close {
            width: 2rem;
            height: 2rem;
        }
    }
`;
const VideoDetailsContainer = styled.div`
    h2 {
        padding: 1rem 5rem;
    }
`;
const Details = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    .label {
        margin-left: 2rem;
        padding: .5rem;
    }
    
    h3 {
        text-transform: uppercase;
        font-size: 60%;
        font-weight: bolder;
    }
    p {
        font-size: 90%;
    }
`;

export default Video;