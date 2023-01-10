import React from "react";
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <h2>about me</h2>
            <Details>               
                <p>There was a silly damn bird called a Phoenix back before Christ, 
                    every few hundred years he built a pyre and burned himself up. 
                    He must have been first cousin to Man. But every time he burnt 
                    himself up he sprang out of the ashes, he got himself born all over again. 
                    And it looks like we’re doing the same thing, over and over, but we’ve got 
                    one damn thing the Phoenix never had. We know the damn silly thing we just did. 
                    We know all the damn silly things we’ve done for a thousand years and as long 
                    as we know that and always have it around where we can see it, some day we’ll 
                    stop making the goddamn funeral pyres and jumping in the middle of them. 
                    We pick up a few more people that remember, every generation.
                </p>
                <img src="row-3-column-3(1).png" alt="fishbowl" />
            </Details>
        </About>
    )
}

//Styles
const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: #000;
    color: white;
    h2 {
        padding-bottom: 2rem;
    }
    p {
        padding: 1rem;
        font-size: 1.1rem;
    }
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    p {
        text-align: center;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        height: 70%;
    }
    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    }
`;

export default AboutSection;