import React, {useState} from "react";
import data from '../videoData'
import styled from "styled-components";
import VideoLibrary from "../components/VideoLibrary";
import Video from "../components/Video";


const Media = () => {    
    const [videos, setVideos] = useState(data());
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const [videoInfo, setVideoInfo] = useState(false);
    
    return(
        <>
            <Video currentVideo={currentVideo}/>
            <StyledVideo>
                {videos.map((video) => (                    
                <VideoLibrary 
                videos={videos} 
                setVideos={setVideos}
                setCurrentVideo={setCurrentVideo} 
                id={video.id}
                key={video.id}
                video={video} />             
                ))}
            </StyledVideo>
        </>
    )
};

//Styles 
const StyledVideo = styled.div`
    position: relative;
    padding-top: 5rem;
    height: 100vh;
    h2 {
        cursor: pointer;
    }
    
`;

export default Media;