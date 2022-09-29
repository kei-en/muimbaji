import React, {useState} from "react";
import styled from "styled-components";
import VideoLibrary from "../components/VideoLibrary";
import Video from "../components/Video";
import Gallery from "../components/Gallery";
import { SliderStyles } from "../styles";
import GallerySlider from '../components/GallerySlider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Media = ({ videos, setVideos, currentVideo, setCurrentVideo, currentImage, setCurrentImage, images, setImages }) => {   
    const [pageStatus, setPageStatus] = useState(true)
    const [videoInfoStatus, setVideoInfoStatus] = useState(false);
    const [sliderStatus, setSliderStatus] = useState(false);
    
    return(
        <StyledMedia variants={pageAnimation} initial="hidden" animate="show" exit="exit">            
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
            <div className={`${pageStatus ? 'inactive' : ''}`}>             
                <Slider>
                    <div className={`slider ${sliderStatus ? 'slider-active' : ''}`}>    
                        <button onClick={() => {setSliderStatus(false)}}>
                            <FontAwesomeIcon className="close" icon={faClose} />
                        </button>                 
                        <GallerySlider
                        onClick={(e) => e.stopPropagation()}
                        images={images}
                        setImages={setImages}
                        currentImage={currentImage} 
                        setCurrentImage={setCurrentImage}
                        status={sliderStatus}
                        setStatus={setSliderStatus}
                        id={currentImage.id}
                        />
                    </div>
                </Slider>     
                <Images className="fullpage"> 
                {images.map((image) => ( 
                    <Gallery 
                        images={images} 
                        setImages={setImages} 
                        currentImage={currentImage} 
                        setCurrentImage={setCurrentImage}
                        setSliderStatus={setSliderStatus}
                        image={image.link}
                        id={image.id}
                        key={image.id}
                    />
                ))}
                </Images>
            </div>
        </StyledMedia>
    )
};

//Styles 
const StyledMedia = styled(motion.div)`
    height: 100vh;
    overflow: hidden;
    position: relative;
    .inactive {
        display: none;
    }
`;
const Headers = styled.div`
    padding-top: 2.8rem;
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
    height: 90vh;
    overflow: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px,1fr));
    grid-row-gap: 5rem;
    
`; 
const Images = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    position: relative;
    padding: 1rem;
    height: 70vh;
    overflow: scroll;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Slider = styled(SliderStyles)`
    position: relative;
    z-index: 4;
    .slider {        
        width: 100%;
        display: none;
        background: #131313e3;
        position: absolute;
        transition: .5s all ease;
        button {
            background: #ffffff44;
            border: none;
            outline: none;
            text-align: end;
            width: 100%;
            height: 40px;
            cursor: pointer;
        }     
    }
    .slider-active {
        display: flex;
        flex-direction: column;
    }
`;

export default Media;