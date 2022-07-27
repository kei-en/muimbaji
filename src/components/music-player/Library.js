import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus }) => {    
    return (
        <StyledLibrary className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <LibrarySongs>
                {songs.map((song) => (
                    <LibrarySong
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                    songs={songs}
                    song={song} 
                    setCurrentSong={setCurrentSong}
                    id={song.id}
                    key={song.id}
                    setSongs={setSongs}
                    />
                ))}
                
            </LibrarySongs>
        </StyledLibrary>
    )
};

//Styles
const StyledLibrary = styled.div`
    display: flex;
    padding-top: 4rem;
    flex-direction: column;
    align-items: center;
    background: #222;
    color: #f0f0f0;
    width: 70%;
    height: 90vh;
    overflow: scroll;
    h2 {
        padding: 2rem;
    }
`;

//Styles
const LibrarySongs = styled.div`
    min-width: 60%;
`;

export default Library;