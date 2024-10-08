import React from "react";
import styled from "styled-components";

const MusicSideBar = ({ currentSong }) => {
  return (
    <SideBar>
      <SideBarHead>
        <CoverImage>
          <img src={currentSong.cover} alt={currentSong.name} />
          <SongTitle>
            <h3>{currentSong.name}</h3>
            <p>{currentSong.artist}</p>
          </SongTitle>
        </CoverImage>
      </SideBarHead>
      <SongDescription>
        <Links>
          <h3>Available on</h3>
          <Container>
            <a href="#" className="button">
              <img
                src="https://cloudinary-cdn.ffm.to/s--e_GXTT_B--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_spotify.png"
                alt="spotify"
              />
            </a>
            <a href="#" className="button">
              <img
                src="https://cloudinary-cdn.ffm.to/s--LpZFcfe0--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_applemusic_listen.png"
                alt="apple music"
              />
            </a>
            <a href="#" className="button">
              <img
                src="https://cloudinary-cdn.ffm.to/s--SpGLvRtY--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_bandcamp.png"
                alt="bandcamp"
              />
            </a>
            <a href="#" className="button">
              <img
                src="https://cloudinary-cdn.ffm.to/s--nYvVzXAq--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_youtube.png"
                alt="youtube"
              />
            </a>
            <a href="#" className="button">
              <img
                src="https://cloudinary-cdn.ffm.to/s--BuOsZiLg--/h_64,c_scale/f_webp/https%3A%2F%2Fassets.ffm.to%2Fimages%2Flogo%2Fmusic-service_deezer.png"
                alt="deezer"
              />
            </a>
          </Container>
        </Links>
        <div>
          <h3>Written, Produced, Performed, Mixed by</h3>
          <p>
            {currentSong.writer}, {currentSong.producer}, {currentSong.mixer}
          </p>
        </div>
      </SongDescription>
    </SideBar>
  );
};

//Styles
const SideBar = styled.div`
  height: 80vh;
  width: 100%;
  overflow: scroll;
  background: #222;
  display: flex;
  flex-direction: column;
`;
const SideBarHead = styled.div`
  padding: 4rem 1rem 1rem;
`;
const CoverImage = styled.div`
  position: relative;
  overflow-x: hidden;
  img {
    height: 40vh;
    width: 100%;
    @media only screen and (min-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      height: 50vh;
    }
    object-fit: fill;
  }
`;
const SongTitle = styled.div`
  position: absolute;
  left: 25%;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  color: #f0f0f0;
  background: #22222252;
  p {
    font-weight: bold;
  }
`;
const SongDescription = styled.div`
  color: #fff;
  padding: 0rem 1rem;
  h3 {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }
  p {
    padding: 1rem;
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f06c;
  color: #222;
  border-radius: 1rem;
  h3 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 0 4rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .button {
    padding: 2px;
    height: 2.8rem;
    width: auto;
    display: block;
  }
  img {
    height: 100%;
    max-width: 10rem;
    margin-bottom: 10px;
    display: inline-block;
    padding-bottom: 11px;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export default MusicSideBar;
