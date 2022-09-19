import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
    
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
        fullscreen: false,
    });

    const element = document.getElementById("videoElement");
    
    const toggleFullscreen = () => {
        if(!playerState.fullscreen) {
            if(element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
            else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            setPlayerState({
                ...playerState,
                fullscreen: true,
            })
        }
        else {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            else if(document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setPlayerState({
                ...playerState,
                fullscreen: false,
            })
        }
    }

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
        if(!playerState.isMuted) {
            setPlayerState({
                ...playerState,
                isMuted: !playerState.isMuted,
            });
            videoElement.current.volume = 0;
        }
    };

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        dragHandler,
        toggleMute,
        toggleFullscreen,
    }
};

export default useVideoPlayer;