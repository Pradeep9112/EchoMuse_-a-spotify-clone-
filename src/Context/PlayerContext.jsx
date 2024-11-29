import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assests/assets";

export const PlayerContext = createContext();
const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }

    })
    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false);
    }
    const playWithId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play();
        setPlayerStatus(true);
    }
    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play();
            setPlayerStatus(true);
        }
    }
    // const seekSong = (e) => {
    //     const offsetX = e.nativeEvent.offsetX;
    //     const width = seekBg.current.offsetWidth; // Corrected property name
    //     const duration = audioRef.current.duration;

    //     // Calculate the new currentTime for the audio based on the seek bar position
    //     const newTime = (offsetX / width) * duration;

    //     // Update the audio's current time
    //     audioRef.current.currentTime = newTime;
    //   };
    const seekSong = (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)

    }

    const contextvale = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playerStatus,
        setPlayerStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    }
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef])

    return <PlayerContext.Provider value={contextvale}>
        {props.children}
    </PlayerContext.Provider>
}
export default PlayerContextProvider;