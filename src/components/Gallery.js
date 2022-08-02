import styled from 'styled-components';

const Gallery = ({ setSliderStatus, setImages, image, images, setCurrentImage, currentImage, id }) => {
    const imageSelectHandler = async () => {
        const selectedImg = images.filter((state) => state.id === id)
        await setCurrentImage(selectedImg[0]);
        setSliderStatus(true);
        //Active state
        const newImages = images.map(image => {
            if(image.id === id) {
                return {
                    ...image,
                    active: true,
                }
            }else {
                return {
                    ...image,
                    active: false,
                }
            }
        },); 
        setImages(newImages);
    }
        
    return (
        <div onClick={imageSelectHandler} className="fullpage">             
            <img src={image} alt="muimbaji" key={image.id} />
        </div>
    )
};



export default Gallery;