import React from "react";
import styled from "styled-components";

const LibrarySong = ({ audioRef, song, songs, setCurrentSong, id, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id)
        await setCurrentSong(selectedSong[0]);
        //Active state
        const newSongs = songs.map(song => {
            if(song.id === id) {
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
        //check if the song is playing
        if(isPlaying) audioRef.current.play();
    }
    return (
        <StyledLibrarySong onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <SongDescription>
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
            </SongDescription>
        </StyledLibrarySong>
    );
};

//Styles
const StyledLibrarySong = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #2c2c2c;
    border-bottom: 0.1px solid #222;
    img {
        width: 3rem;
    }
    &:hover {
        background: rgb(222, 222, 255);
    }
`;
const SongDescription = styled.div`
    padding: 10px;
    color: #f0f0f0;
    h3 {
        font-size: 100%;
        text-transform: none;
    }
    p {
        font-size: 80%;
    }
`;

export default LibrarySong;