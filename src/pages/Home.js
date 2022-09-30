import React from "react";
import LatestReleases from "../components/LatestReleases";
import MainHeader from "../components/MainHeader";
import VideosSection from "../components/VideosSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import styled from "styled-components";

const Home = ({videos, currentVideo}) => {

    return (
        <StyledHome
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <MainHeader />
            <AboutSection />
            <VideosSection currentVideo={currentVideo} videos={videos} />
            <EventsSection />
            <LatestReleases />
        </StyledHome>
    )
};

const StyledHome = styled(motion.div)`
    overflow: hidden;
`

export default Home;