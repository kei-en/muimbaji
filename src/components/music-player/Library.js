import React, { useState } from "react";
import styled from "styled-components";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setCurrentSong,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const [pageStatus, setPageStatus] = useState(true);

  return (
    <Container>
      <Titles>
        <h3
          className={`${pageStatus ? "active" : ""}`}
          onClick={() => setPageStatus(true)}>
          Tracks
        </h3>
        <h3
          className={`${!pageStatus ? "active" : ""}`}
          onClick={() => setPageStatus(false)}>
          Albums
        </h3>
      </Titles>
      <StyledLibrary
        className={`tracks ${libraryStatus ? "active-library" : ""}`}>
        <LibrarySongs className={`${!pageStatus ? "inactive" : ""}`}>
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
        <Albums className={`${pageStatus ? "inactive" : ""}`}>
          <Album>
            <img
              src="https://i.scdn.co/image/ab67616d00001e02d4282d8a398d1559d6d03e99"
              alt="late night essentials cover"
            />
            <h3>Late Night Essentials</h3>
          </Album>
          <Album>
            <img
              src="https://i.scdn.co/image/ab67616d00001e027d0ff1890533691758b7b7b9"
              alt="chillville cover"
            />
            <h3>Chillville</h3>
          </Album>
        </Albums>
      </StyledLibrary>
    </Container>
  );
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
  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    height: 96vh;
  }
`;
const Titles = styled.div`
  display: inline-flex;
  background: #0d0d0d;
  color: #f0f0f0;
  padding: 8rem 1rem 1rem;
  .active {
    border-bottom: 3px solid #3b3a3a;
  }
  h3 {
    padding: 0.5rem;
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
`;
const StyledLibrary = styled.div`
  background: #0d0d0d;
  padding: 0rem 1rem;
  color: #f0f0f0;
  @media only screen and (min-width: 768px) {
    display: flex;
    padding: 6rem 4rem 2rem;
    flex-direction: column;
    width: 70%;
    overflow: scroll;
    h2 {
      padding: 2rem;
    }
  }
`;
const LibrarySongs = styled.div`
  /* min-width: 60%; */
`;
const Albums = styled.div`
  padding: 2rem;
  min-width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 0.5fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
const Album = styled.div`
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;
export default Library;
