import React, {useState} from "react";
import { vidHop } from '../data'
import styled from "styled-components";
import { SliderStyles } from "../styles";
import VideoLibrary from "../components/VideoLibrary";
import Video from "../components/Video";
import Gallery from "../components/Gallery";
import GallerySlider from '../components/GallerySlider'


const Media = ({ currentImage, setCurrentImage, images, setImages, sliderStatus, setSliderStatus }) => {   
    const [pageStatus, setPageStatus] = useState(true)
    
    const [videos, setVideos] = useState(vidHop);
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const [videoInfoStatus, setVideoInfoStatus] = useState(false);
    
    return(
        <StyledMedia>            
            <VideoComponent>
                <div className={`video ${videoInfoStatus ? 'video-active' : ""}`}>                
                    <Video currentVideo={currentVideo} setStatus={setVideoInfoStatus}/>
                </div>
                <Headers>                    
                    <h2 className={`${pageStatus ? 'active' : ''}`} onClick={() => setPageStatus(true)}>Videos</h2>
                    <h2 className={`${!pageStatus ? 'active' : ''}`} onClick={() => setPageStatus(false)}>images</h2>
                </Headers>
                <StyledVideo className={`${!pageStatus ? 'inactive' : ''}`}>
                    {videos.map((video) => (                    
                        <VideoLibrary 
                        videos={videos} 
                        setVideos={setVideos}
                        setCurrentVideo={setCurrentVideo}
                        status={videoInfoStatus}
                        setStatus={setVideoInfoStatus}
                        id={video.id}
                        key={video.id}
                        video={video} />             
                    ))}
                </StyledVideo>
            </VideoComponent>
            <Slider className={`${!sliderStatus ? 'slider-active' : ''}`}>
                <GallerySlider
                images={images}
                setImages={setImages}
                currentImage={currentImage} 
                setCurrentImage={setCurrentImage}
                setStatus={setSliderStatus}
                status={sliderStatus}
                id={currentImage.id}
                />
            </Slider>           
            <Images className={`${pageStatus ? 'inactive' : ''}`}>     
                {images.map((image) => (
                <Gallery 
                    images={images} 
                    setImages={setImages} 
                    currentImage={currentImage} 
                    setCurrentImage={setCurrentImage}
                    id={image.id}
                    key={image.id} 
                    image={image}
                />
                ))}
            </Images>
        </StyledMedia>
    )
};

//Styles 
const StyledMedia = styled.div`
    height: 100%;
    position: relative;
    padding-bottom: 1rem;
    .inactive {
        display: none;
    }
    .slider-active {
        transform: translateX(0%);
        opacity: 1;
    }
`;
const Headers = styled.div`
    padding-top: 5rem;
    display: inline-flex;
    .active {
        font-size: 3rem;
        border-bottom: 3px solid #22222286;
    }
    h2 {
        padding: 1rem 0rem 0rem 2rem;
        margin: 0.5rem;
        transition: .3s all ease;
        &:hover {
            cursor: pointer;
            border-bottom: 10px solid #22222286;
            font-size: 3rem;
        }
    }
`;
const VideoComponent = styled.div`
    .video {
        transform: translateX(-100%);
        transition: all .5s ease-in-out;
        opacity: 0;
    }
    .video-active {
        transform: translateX(0%);
        opacity: 1;
    }
`;
const StyledVideo = styled.div`
    padding: 5rem 2rem;
    height: 100vh;
    overflow: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px,1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    
`; 
const Images = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    position: relative;
    height: 100vh;
    overflow: scroll;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Slider = styled(SliderStyles)`
    position: absolute;
    z-index: 4;
    width: 100%;
    background: #131313e3;
    transform: translateX(-100%);
    opacity: 0;
    transition: .5s all ease;
`;
export default Media;