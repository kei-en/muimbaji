import styled from "styled-components";
import { SliderStyles } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const GallerySlider = ({ status, setStatus, images, setImages, currentImage, setCurrentImage, id}) => {
    
    const activeImageHandler = (nextPrev) => {
        const newImages = images.map(image => {
            if(image.id === nextPrev.id) {
                return {
                    ...image,
                    active: true,
                }
            } else {
                return {
                    ...image,
                    active: false,
                }
            }
        },);
        setImages(newImages);
    }
    const imageChangeHandler = async (direction) => {
        let currentIndex = images.findIndex(image => image.id === id)
        if(direction === 'next') {
            await setCurrentImage(images[(currentIndex + 1) % images.length])
            activeImageHandler(images[(currentIndex + 1) % images.length])
        }
        if(direction === 'prev') {
            if((currentIndex - 1) % images.length === - 1) {
                await setCurrentImage(images[images.length - 1])
                activeImageHandler(images[images.length - 1])
                return
            }
            await setCurrentImage(images[(currentIndex - 1) % images.length])
            activeImageHandler(images[(currentIndex - 1) % images.length])
        }
    }
    const goToSlide = (id) => {
        const selectedSlide = images.filter((state) => state.id === id);
        setCurrentImage(selectedSlide[0]);
    };

    return (
        <SliderStyle /*className={`${!status ? 'slider-active' : ''}`}*/ >
            
            <CurrentImage>
                <LeftArrowStyle onClick={() => imageChangeHandler('prev')}>
                    ❰
                </LeftArrowStyle>
                <RightArrowStyle onClick={() => imageChangeHandler('next')}>
                    ❱
                </RightArrowStyle>
                <ImageBackground src={currentImage.link} alt="artist" />
            </CurrentImage>
            <DotContainer> 
                {images.map((image) => (
                    <SmallImage
                        key={image.id}
                        onClick={() => goToSlide(image.id)}
                    >
                        <img src={image.link} alt="artist" />
                    </SmallImage>
                ))}
            </DotContainer>            
        </SliderStyle>
    )
}

//Styles
const SliderStyle = styled(SliderStyles)`

    
`;
const CurrentImage = styled.div`
    width: 90%;
    height: 80vh;
    position: relative;
`;
const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const LeftArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 28px;
    font-size: 30px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;
const RightArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 28px;
    font-size: 30px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;
const DotContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 1rem;
    height: 12rem;
    width: 60em;
    overflow-x: auto;
    flex-wrap: wrap;
`;
const SmallImage = styled.div`
    border: none;
    width: 12em;
    height: 100%;
    padding: 5px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default GallerySlider;