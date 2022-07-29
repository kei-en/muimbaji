import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
    
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        })
    };

    useEffect(() => {
        playerState.isPlaying 
        ? videoElement.current.play() 
        : videoElement.current.pause();
    }, [playerState.isPlaying, videoElement]);

    const handleOnTimeUpdate = (e) => {
        const current = e.target.progress;
        setPlayerState({
            ...playerState,
            progress: current,
        });
    };

    const dragHandler = e => {
        videoElement.current.currentTime = e.target.value;
        setPlayerState({ ...playerState, progress: e.target.value})
    }

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        dragHandler,
        toggleMute,
    }
};

export default useVideoPlayer;