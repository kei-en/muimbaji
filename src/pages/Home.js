import React from "react";
import LatestReleases from "../components/LatestReleases";
import MainHeader from "../components/MainHeader";
import VideosSection from "../components/VideosSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import PhotosSection from "../components/PhotosSection";

const Home = () => {
    return (
        <>
            <MainHeader />
            <LatestReleases />
            <VideosSection />
            <AboutSection />
            <EventsSection />
            <PhotosSection />
        </>
    )
}

export default Home;