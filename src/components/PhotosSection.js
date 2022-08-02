import React from "react";
import styled from "styled-components";
import { SliderStyles } from "../styles";
import GallerySlider from "./GallerySlider";

const PhotosSection = ({ setImages, images, setCurrentImage, currentImage }) => {
    return (
        <GalleryStyle>
            <h2>featured photos</h2>
            <PhotosContainer>
                <GallerySlider
                className="active" 
                images={images} 
                setImages={setImages} 
                currentImage={currentImage} 
                setCurrentImage={setCurrentImage}
                id={currentImage.id} />
            </PhotosContainer>  
        </GalleryStyle>
    )
};

//Styles
const GalleryStyle = styled.div`
    padding: 2rem 2rem;
    color: white;
    background: black;
    .active {
        transform: translateX(0%);
        opacity: 1;
    }
    h2 {
        text-align: center;
        padding: 1rem;
    }
`

const PhotosContainer = styled(SliderStyles)`
    padding: 1rem 0rem;
    button {
        display: none;
    }
`;

export default PhotosSection;