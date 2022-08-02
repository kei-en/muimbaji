import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPause, faPlay, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import useVideoPlayer from "../hooks/useVideoPlayer";
import styled from "styled-components";

const Video = ({currentVideo, status, setStatus}) => {
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        dragHandler,
        toggleMute,
    } = useVideoPlayer(videoElement);
    
    return (
            <VideoContainer className={`${!status ? 'video-active' : ""}`}>
                <button onClick={() => {setStatus(false)}}>
                    <FontAwesomeIcon className="close" icon={faClose} />
                </button>  
                <VideoDetailsContainer>
                    <Container>
                        <VideoWrapper>
                            <video 
                            src={currentVideo.url}
                            ref={videoElement}
                            onTimeUpdate={handleOnTimeUpdate} 
                            />
                            <Controls className="controls">
                                <Actions>
                                    <button onClick={togglePlay}>
                                        {!playerState.isPlaying ? (
                                            <FontAwesomeIcon className="icon" icon={faPlay} />
                                        ) : (
                                            <FontAwesomeIcon className="icon" icon={faPause} />
                                        )}
                                    </button>
                                </Actions>
                                <input
                                type="range"
                                min="0"
                                max="100"
                                value={playerState.progress}
                                onChange={e => dragHandler(e)}
                                />
                                <MuteButton onClick={toggleMute}>
                                    {!playerState.isMuted ? (
                                        <FontAwesomeIcon className="icon" icon={faVolumeHigh} />
                                    ) : (
                                        <FontAwesomeIcon className="icon" icon={faVolumeXmark} />
                                    )}
                                </MuteButton>
                            </Controls>
                        </VideoWrapper>
                    </Container>
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
    )
};

//Styles
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
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`
const VideoWrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 10rem;
    &:hover .controls {
        transform: translateY(0%);
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 30px;
    padding: 14px;
    width: 80%;
    max-width: 500px;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: translateY(150%);
    transition: all 0.3s ease-in-out;
    input[type="range"] {
        -webkit-appearance: none !important;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        height: 4px;
        width: 300px;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        cursor: pointer;
        height: 6px;
    }

    input[type="range"]::-moz-range-progress {
       background: white;
    }
`;
const Actions = styled.div`
    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .icon {
        background-color: none;
        color: white;
        font-size: 20px;
    }
`;
const MuteButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    .icon {
        background-color: none;
        color: white;
        font-size: 20px;
    } 
`

export default Video;