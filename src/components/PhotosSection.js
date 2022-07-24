import React from "react";
import photo1 from '../img/nicolas-lobos-ojE3yyWz27s-unsplash.jpg';
import photo2 from '../img/woody-kelly-uQcWUXFALww-unsplash.jpg';
import photo3 from '../img/austin-neill-hgO1wFPXl3I-unsplash.jpg';
import photo4 from '../img/jakayla-toney-2NBLAuuGVFo-unsplash.jpg';
import photo5 from '../img/ehimetalor-akhere-unuabona-5vpILdhPDHA-unsplash.jpg';
import photo6 from '../img/erik-mclean-9y1cTVKe1IY-unsplash.jpg';


const PhotosSection = () => {
    return (
        <div>
            <h2>featured photos</h2>
            <div className="carousel">
                <img src={photo1} alt="people" />
                <img src={photo2} alt="people" />
                <img src={photo3} alt="people" />
                <img src={photo4} alt="people" />
                <img src={photo5} alt="people" />
                <img src={photo6} alt="people" />
            </div>
        </div>
    )
}

export default PhotosSection;