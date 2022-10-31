import React, { useState } from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus }) => {       
    const [pageStatus, setPageStatus] = useState(true);
    
    return (                
        <Container>
            <Titles>
                <h3 className={`${pageStatus ? 'active' : ''}`} onClick={() => setPageStatus(true)}>Tracks</h3>
                <h3 className={`${!pageStatus ? 'active' : ''}`} onClick={() => setPageStatus(false)}>Albums</h3>
            </Titles>
            <StyledLibrary className={`tracks ${libraryStatus ? 'active-library' : ''}`}>
                <LibrarySongs className={`${!pageStatus ? 'inactive' : ''}`}>
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
                <Albums className={`${pageStatus ? 'inactive' : ''}`}>
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
        </Container>
    )
};

//Styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4rem;
    .inactive {
        display: none;
    }
`;
const Titles = styled.div`
    display: inline-flex;
    background: #0D0D0D;
    color: #f0f0f0;
    padding: 8rem 1rem 1rem;
    h3 {
        padding: .5rem;
        cursor: pointer;
    }
`;
const StyledLibrary = styled.div`
    background: #0D0D0D;
    padding: 0rem 1rem;
    color: #f0f0f0;
    /* display: flex;
    padding: 6rem 4rem 2rem;
    flex-direction: column;
    width: 70%;
    height: 90vh;
    overflow: scroll;
    h2 {
        padding: 2rem;
    } */
`;
const LibrarySongs = styled.div`
    /* min-width: 60%; */
`;
const Albums = styled.div`
    padding: 2rem;
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