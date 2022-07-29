import React from "react";
import styled from "styled-components";
import Library from "../components/music-player/Library";
import MusicSideBar from "../components/music-player/MusicSideBar";

const Music = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, currentSong }) => {
    
    return (
        <StyledMusic>
            <Library
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            libraryStatus={libraryStatus}
            songs={songs}
            setSongs={setSongs}
            />
            <MusicSideBar currentSong={currentSong}/>
        </StyledMusic>
    )
}

//Styles
const StyledMusic = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Music;