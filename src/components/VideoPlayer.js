import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faVolumeHigh, faVolumeXmark, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import useVideoPlayer from "../hooks/useVideoPlayer";

function VideoPlayer({ currentVideo }) {
    const videoElement = useRef(null);
    
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        dragHandler,
        toggleMute,
        toggleFullscreen,
    } = useVideoPlayer(videoElement);

    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    //Track animation styling
    const animTrack = {
        transform: `translate(${playerState.animationPercentage}%)`   
    }
    
    return (
        <Container>
            <VideoWrapper id="videoElement">
                <video 
                src={currentVideo.url}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
                onLoadedMetadata={handleOnTimeUpdate} 
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
                    <TimeControl>
                        <p>{getTime(playerState.currentTime)}</p>
                        <Track>
                            <input 
                                min={0} 
                                max={playerState.duration || 0} 
                                value={playerState.currentTime} 
                                onChange={dragHandler} 
                                type="range" 
                            />
                            <AnimateTrack style={animTrack}></AnimateTrack>
                        </Track>
                        <p>{playerState.duration ? getTime(playerState.duration) : '0:00'}</p>
                    </TimeControl>
                    <MuteButton onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            <FontAwesomeIcon className="icon" icon={faVolumeHigh} />
                        ) : (
                            <FontAwesomeIcon className="icon" icon={faVolumeXmark} />
                        )}
                    </MuteButton>
                    <MuteButton onClick={toggleFullscreen}>
                        {!playerState.fullscreen ? (
                            <FontAwesomeIcon className='icon' icon={faExpand} />
                        ) : (
                            <FontAwesomeIcon className='icon' icon={faCompress} />
                        )}
                    </MuteButton>
                </Controls>
            </VideoWrapper>
        </Container>
    )
}

export default VideoPlayer

// Styles 
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const VideoWrapper = styled.div`
    min-width: 720px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
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
    max-width: 700px;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transform: translateY(150%);
    transition: all 0.3s ease-in-out;
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
const TimeControl = styled.div`
    width: 50%;
    display: flex;
    p {
        padding: 0.5rem;
        color: #ffffff;
        font-size: 0.9rem;
    }
    input {
        width: 100%;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }
    input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
        width: 16px;
        height: 16px;
    }

    input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        background: transparent;
        border: none;
    }
`;
const Track = styled.div`
    background: #e2e2e2;
    height: 0.8rem;
    position: relative;
    border: 0.1px solid rgba(240, 240, 240, 0.5);
    border-radius: 3px;
    overflow: hidden;
    width: 100%;
    align-self: center;
`;
const AnimateTrack = styled.div`
    background: #696666;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%); 
    pointer-events: none;
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
`;