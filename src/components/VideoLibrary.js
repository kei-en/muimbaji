

const VideoLibrary = ({ videos, setCurrentVideo, video, setVideos, id }) => {
    const videoSelectHandler = () => {
        const selectedVideo = videos.filter((state) => state.id === id);
        setCurrentVideo(selectedVideo[0]);
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
        <div onClick={videoSelectHandler} className={`${video.active ? 'video-active' : ""}`}>
                <div className="video-poster">
                    <img src={video.cover} alt={video.name} />
                    <h3>{video.name}</h3>
                    <p>{video.artist}, {video.writer}, {video.producer}</p>
                </div>
        </div>
    )
}

export default VideoLibrary;