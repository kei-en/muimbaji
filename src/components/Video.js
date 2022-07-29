import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import useVideoPlayer from "../hooks/useVideoPlayer";
import styled from "styled-components";

const Video = ({video}) => {
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        dragHandler,
        toggleMute,
    } = useVideoPlayer(videoElement);
    
    return (
        <Container>
            <VideoWrapper>
                <video 
                src={video}
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
    )
};

//Styles
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
const VideoWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
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
    width: 100%;
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
        width: 350px;
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
        font-size: 30px;
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