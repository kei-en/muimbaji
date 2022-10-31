import React from "react";
import styled from "styled-components";
import Library from "../components/music-player/Library";
import MusicSideBar from "../components/music-player/MusicSideBar";
import Player from '../components/music-player/Player';
import { motion } from "framer-motion"; 
import { pageAnimation } from "../animation";

const Music = ({ songs, setCurrentSong, audioRef, isPlaying, setIsPlaying, setSongs, libraryStatus, currentSong, setSongInfo, songInfo }) => {
    
    return (
        <>
            <StyledMusic variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <Library
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                libraryStatus={libraryStatus}
                songs={songs}
                setSongs={setSongs}
                />
                {/* <MusicSideBar currentSong={currentSong}/> */}
            </StyledMusic>
            <Player
                audioRef={audioRef}
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs} 
            />
        </>
    )
}

//Styles
// const MusicContainer = styled.div`
//     display: flex;
//     flex-direction: column;
// `;
const StyledMusic = styled(motion.div)`
  display: flex;
  justify-content: space-around;
`;

export default Music;