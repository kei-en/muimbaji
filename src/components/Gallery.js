import styled from 'styled-components';

const Gallery = ({ setImages, image, images, setCurrentImage, currentImage, id }) => {
    const imageSelectHandler = async () => {
        const selectedImg = images.filter((state) => state.id === id)
        await setCurrentImage(selectedImg[0]);
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
            <img src={image.link} alt="muimbaji" key={image.id} />
        </div>
    )
};



export default Gallery;