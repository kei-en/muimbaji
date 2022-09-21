import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
    
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        speed: 1,
        isMuted: false,
        fullscreen: false,
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
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
        const current = e.target.currentTime;
        const duration = e.target.duration;
        //Calculate percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);

        setPlayerState({
            ...playerState,
            currentTime: current, 
            duration,
            animationPercentage: animation,
        });
    };

    const dragHandler = e => {
        videoElement.current.currentTime = e.target.value;
        setPlayerState({ 
            ...playerState,
            currentTime: e.target.value,
        })
    }

    const toggleMute = () => {
        videoElement.current.volume = !videoElement.current.volume;
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
        toggleFullscreen,
    }
};

export default useVideoPlayer;