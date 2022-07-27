import React from "react";
import styled from "styled-components";
import logo from '../img/fishbowl.png';

const AboutSection = () => {
    return (
        <About>
            <h2>about me</h2>
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
            <p>And when the war’s over, some day, some year, the books can be written again, 
                the people will be called in, one by one, to recite what they know and we’ll 
                set it up in type until another Dark Age, when we might have to do the whole 
                damn thing over again. But that’s the wonderful thing about man; he never gets 
                so discouraged or disgusted that he gives up doing it all over again, because 
                he knows very well it is important and worth the doing.
            </p>
            <img src={logo} alt="logo" />
        </About>
    )
}

//Styles
const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 10rem;
    background: #000;
    color: white;
    h2 {
        padding: 1rem;
    }
    p {
        padding: 2rem;
        font-size: 1.1rem;
        text-align: center;
    }
    img {
        width: 30px;
        height: 30px;
        margin: 1rem;
    }
`

export default AboutSection;