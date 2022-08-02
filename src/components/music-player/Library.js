import React from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus }) => {       
    return (        
        <>
            <Titles>
                <h3>Tracks</h3>
                <h3>Albums</h3>
            </Titles>
            <StyledLibrary className={`tracks ${libraryStatus ? 'active-library' : ''}`}>
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
                <Albums>
                    <Album>
                        <img src="https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg" alt="late night essentials cover" />
                        <h3>Late Night Essentials</h3>
                    </Album>
                    <Album>
                        <img src="https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg" alt="chillville cover" />
                        <h3>Chillville</h3>
                    </Album>
                </Albums>
            </StyledLibrary>
        </>
    )
};

//Styles
const Titles = styled.div`
    background: #222;
    color: #f0f0f0;
    padding: 8rem 2rem 0rem;
`;
const StyledLibrary = styled.div`
    display: flex;
    padding: 6rem 4rem 2rem;
    flex-direction: column;
    background: #222;
    color: #f0f0f0;
    width: 70%;
    height: 90vh;
    overflow: scroll;
    h2 {
        padding: 2rem;
    }
`;
const LibrarySongs = styled.div`
    min-width: 60%;
`;
const Albums = styled.div`
    padding-top: 2rem;
    min-width: 60%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem,.5fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
`;
const Album = styled.div`
    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }
`
;
export default Library;