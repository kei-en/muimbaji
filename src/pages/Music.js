import React from "react";
import Library from "../components/music-player/Library";

const Music = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
    
    return (
        <div>
            <Library
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            libraryStatus={libraryStatus}
            songs={songs}
            setSongs={setSongs}
            />
        </div>
    )
}

export default Music;