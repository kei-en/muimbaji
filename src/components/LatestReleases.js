import React from "react";
import styled from "styled-components";

import gramaslick from '../img/adam-birkett-75EFpyXu3Wg-unsplash.jpg';
import madTea from '../img/diogo-nunes-Wa9ilX9XYOI-unsplash.jpg';
import tigerTheatre from '../img/joshua-fuller-ta7rN3NcWyM-unsplash.jpg';
import nextTime from '../img/gabriela-gomez-3NXyodgX254-unsplash.jpg';
import energyTrap from '../img/ihor-malytskyi-PVhiLxBe22M-unsplash.jpg';
import theJoyOf from '../img/andrea-riondino-6qXjfc8ZfhI-unsplash.jpg';
import unworried from '../img/breno-machado-in9-n0JwgZ0-unsplash.jpg';

const LatestReleases = () => {
    return (
        <div>
            <Title>
                <h2>Latest Releases</h2>
            </Title>
            <Releases>
                <Release>
                    <img src={gramaslick} alt="music cover" />
                    <p>gramaslick '94</p>
                </Release>
                <Release>
                    <img src={madTea} alt="music cover" />
                    <p>mad tea party</p>
                </Release>
                <Release>
                    <img src={tigerTheatre} alt="music cover" />
                    <p>tiger theatre vol. 2</p>
                </Release>
            </Releases>
        </div>
    )
};

//Styles
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

const Releases = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0rem 4rem;
`;

const Release = styled.div`
    margin: auto;
    img {
        height: 15rem;
        width: 15rem;
        object-fit: cover;
    }
    p {
        padding: 1rem;
        font-weight: bold;
        font-size: 1.3rem;
        text-align: center;
    }
`;

// const Releases2Container = styled.div`
//     padding: 0.5rem 2rem;
//     h3 {
//         text-transform: uppercase;
//     }
// `;

// const Releases2 = styled.div`
//     display: flex;
//     flex-direction: row;
//     margin: 2rem;
// `;

// const Release2 = styled.div`
//     width: 12rem;
//     height: 12rem;
//     padding: 1rem;
//     position: relative;
//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }
//     p {
//         position: absolute;
//         top: 25%;
//         left: 20%;
//         color: white;
//         font-weight: bold;
//     }
//     button {
//         position: absolute;
//         top: 45%;
//         left: 25%;
//         padding: .5rem 1rem;
//     }
// `;

export default LatestReleases;