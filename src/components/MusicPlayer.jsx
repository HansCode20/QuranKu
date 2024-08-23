import React, { useState } from 'react';
import audio from '../assets/Audio/Nasheed Taweel Alshawq - Ahmed Bukhatir  - أحمد بوخاطر - نشيد طويل الشوق.mp3';
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        const audio = document.getElementById('background-music');
        isPlaying ? audio.pause() : audio.play();
    };

    return (
        <div className="fixed bottom-0 right-0 p-8">
            <audio id="background-music" loop>
                <source src={audio} type="audio/mpeg" />
            </audio>
            <button onClick={togglePlay} className="bg-blue-500 p-5 rounded-full text-white">
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
        </div>
    );
};

export default MusicPlayer;
