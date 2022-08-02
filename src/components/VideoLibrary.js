import styled from "styled-components";


const VideoLibrary = ({ videos, setCurrentVideo, video, setVideos, id, setStatus }) => {
    const videoSelectHandler = () => {
        const selectedVideo = videos.filter((state) => state.id === id);
        setCurrentVideo(selectedVideo[0]);
        setStatus(true)
        const newVideos = videos.map(video => {
            if(video.id === id) {
                return {
                    ...video,
                    active: true,
                }
            }else {
                return {
                    ...video,
                    active: false,
                }
            }
        },); 
        setVideos(newVideos);
    }
    
    return (
        <StyledVideoLibrary onClick={videoSelectHandler}>
                <div className="video-poster">
                    <img src={video.cover} alt={video.name} />
                    <h3>{video.name}</h3>
                    <p>{video.artist}, {video.writer}, {video.producer}</p>
                </div>
        </StyledVideoLibrary>
    )
}

//Styles
const StyledVideoLibrary = styled.div`
    .video-poster {
        cursor: pointer;
        img {
            width: 100%;
            height: 80%;
        }
    }
`

export default VideoLibrary;