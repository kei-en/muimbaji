import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStepBackward, faStepForward, faPause, faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Song from "./Song";

const Player = ({audioRef, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, currentSong, setSongs}) => {    
    //Volume
    const [isMute, setIsMute] = useState(false);
    const mute = () => {
        setIsMute(!isMute);
        audioRef.current.volume = !audioRef.current.volume;
    }
    const setVolume = (value) => {
        if(!isMute) audioRef.current.volume = value / 100;
    }
    
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            }else {
                return {
                    ...song,
                    active: false,
                }
            }
        },); 
        setSongs(newSongs);
    }
    //Event listeners
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back') {
            if((currentIndex -1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    }
    //Track animation styling
    const animTrack = {
     transform: `translate(${songInfo.animationPercentage}%)`   
    }

    return (      
        <StyledPlayer>
            <Song currentSong={currentSong} />
            <PlayControl>
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" icon={faStepBackward}  />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" icon={faStepForward} />
            </PlayControl>
            <TimeControl>
                    <p>{getTime(songInfo.currentTime)}</p>
                    <Track>
                        <input 
                            min={0} 
                            max={songInfo.duration || 0} 
                            value={songInfo.currentTime} 
                            onChange={dragHandler} 
                            type="range" 
                        />
                        <AnimateTrack style={animTrack}></AnimateTrack>
                    </Track>
                    <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </TimeControl>
            <StyledVolume>
                <FontAwesomeIcon onClick={mute} icon={isMute ? faVolumeXmark : faVolumeHigh} />               
                <input 
                    type="range" 
                    min="0"
                    max="100"
                    step="1"
                    onChange={e => setVolume(e.target.value)}
                />
            </StyledVolume>
        </StyledPlayer>
    )
};

//Styles
const StyledPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #222;
    width: 100%;
`;
const TimeControl = styled.div`
    width: 50%;
    display: flex;
    input {
        width: 100%;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
    }

    p {
        padding: 0.5rem;
        color: #f0f0f0;
        font-size: 0.8rem;
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
const PlayControl = styled.div`
    display: flex;
    width: 10%;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    color: #f0f0f0;
    svg {
        cursor: pointer;
    }
`;
const Track = styled.div`
    background: #e2e2e2;
    height: 0.8rem;
    position: relative;
    border: 0.1px solid rgba(240, 240, 240, 0.5);
    border-radius: 3px;
    overflow: hidden;
    width: 50%;
    align-self: center;
`;
const AnimateTrack = styled.div`
    background: #333333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%); 
    pointer-events: none;
`;
const StyledVolume = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    color: #f0f0f0;
`;

export default Player;