import React from "react"
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
                            <a href="#" className='button'>
                                <img src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/spotify.svg" alt="spotify" />
                            </a>
                            <a href="#" className='button'>
                                <img src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/apple-music.svg" alt="apple music" />
                            </a>
                            <a href="#" className='button'>
                                <img src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/bandcamp.svg" alt="bandcamp" />
                            </a>
                            <a href="#" className='button'>
                                <img src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/youtube.svg" alt="youtube" />
                            </a>
                            <a href="#" className='button'>
                                <img src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/deezer.svg" alt="deezer" />
                            </a>
                        </Container>
                    </Links>
                <h3>Written, Produced, Performed, Mixed by</h3>
                <p>{currentSong.writer}, {currentSong.producer}, {currentSong.mixer}</p>
            </SongDescription>
        </SideBar>
    )

};

//Styles
const SideBar = styled.div`
    height: 90vh;
    width: 30%;
    overflow: scroll;
`;
const SideBarHead = styled.div`
    padding: 6rem 1rem 1rem;
`;
const CoverImage = styled.div`
    position: relative;
    width: 100%;
    width: auto;
    img {
        height: 50vh;
        width: 100%;
        object-fit: coverSX;
    }
`;
const SongTitle = styled.div`
    position: absolute;
    left: 0;
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
    h3 {
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
    }
    p {
        padding: 1rem;
        font-size: 1.1rem;
    }
`;
const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f0f0f06c;
    color: #222;
    h3 {
        font-size: 1.2rem;
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