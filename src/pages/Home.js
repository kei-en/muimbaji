import React from "react";
import LatestReleases from "../components/LatestReleases";
import MainHeader from "../components/MainHeader";
import VideosSection from "../components/VideosSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const Home = ({videoRef}) => {

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <MainHeader />
            <AboutSection />
            <VideosSection videoRef={videoRef}/>
            <EventsSection />
            <LatestReleases />
        </motion.div>
    )
}

export default Home;