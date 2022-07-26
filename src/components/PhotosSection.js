import React from "react";
import ImageSlider from "./ImageSlider";
import styled from "styled-components";

const slides = [
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg', title: 'something'},
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3.jpg', title: 'something'},
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4.jpg', title: 'something'},
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/5.jpg', title: 'something'},
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg', title: 'something'},
    { url: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg', title: 'something'},
]

const PhotosSection = () => {
    return (
        <GalleryStyle>
            <h2>featured photos</h2>
            <PhotosContainer>
                <ImageSlider slides={slides} />
            </PhotosContainer>  
        </GalleryStyle>
    )
};

//Styles
const GalleryStyle = styled.div`
    padding: 2rem 10rem;
    color: white;
    background: black;
    h2 {
        text-align: center;
        padding: 1rem;
    }
`

const PhotosContainer = styled.div`
    width: "500px",
    height: "280px",
    margin: "0 auto",  
`;

export default PhotosSection;