import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { chillHop, imageHop } from './data';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Media from "./pages/Media";

function App() {
  const location = useLocation();
  const audioRef = useRef(null);
  // Images
  const [images, setImages] = useState(imageHop);
  const [currentImage, setCurrentImage] = useState(imageHop[0]);
  //songs
  const [songs, setSongs] = useState(chillHop);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({ 
      ...songInfo, 
      currentTime: current, 
      duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>        
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home 
            currentImage={currentImage} 
            setCurrentImage={setCurrentImage}
            images={images}
            setImages={setImages} />} />
          <Route 
          path="music" 
          element={<Music
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            currentSong={currentSong}
            setIsPlaying={setIsPlaying}
            songInfo={songInfo}
            setSongInfo={setSongInfo} />} 
          />
          <Route path="media" element={<Media 
            currentImage={currentImage} 
            setCurrentImage={setCurrentImage}
            images={images}
            setImages={setImages} />} />
        </Routes>
      </AnimatePresence>
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
