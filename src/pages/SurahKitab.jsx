import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { BiListMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const SurahKitab = () => {
  const { nomor } = useParams();
  console.log(nomor);

  const [surah, setSurah] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const getSurah = () => {
    axios
      .get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
      .then((response) => {
        const surahData = response.data;
        setSurah(surahData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSurah();
  }, []);

  const formatArabicText = (text) => {
    return text
      .replace(/<[^>]+>/g, "") // Hapus tag HTML
      .replace(/<\/?strong>/g, "") // Hapus tag <strong>
      .replace(/<\/?u>/g, "") // Hapus tag <u>
      .replace(/<\/?i>/g, "") // Hapus tag <i>
      .replace(/(\S)([^\w\s])/g, "$1 $2") // Tambahkan spasi sebelum tanda baca
      .replace(/([^\w\s])(\S)/g, "$1 $2"); // Tambahkan spasi setelah tanda baca
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("ended", handleAudioEnded);
    return () => {
      audioElement.removeEventListener("ended", handleAudioEnded);
    };
  }, []);

  const handleAudioEnded = () => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="flex justify-start mt-[20px] ml-[20px]">
        <Link to="/surah">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:w-8/12 lg:w-6/12 mx-auto overflow-hidden ">
        <div className="border-b pb-1 mb-2 p-5 mt-[80px]">
          <h1 className="text-3xl text-gray-700 uppercase font-bold">
            {surah.nama}
          </h1>
          <h2 className="text-2xl text-gray-500 uppercase font-bold">
            {surah.nama_latin}
          </h2>
          <div className="flex items-center">
            <BiListMinus />
            <span className="text-[13px] font-semibold text-gray-600 ml-2">
              {surah.jumlah_ayat} Ayat
            </span>
          </div>
          <div className="flex justify-end items-center">
            <span className="text-xl font-semibold">{surah.tempat_turun}</span>
          </div>
        </div>
      </div>

      <div className="text-center p-5">
        <audio id="audio" ref={audioRef} src={surah.audio}></audio>
        <button
          className="flex items-center gap-2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full"
          onClick={toggleAudio}
        >
          {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div className="p-5 flex-grow ">
        <div className=" pb-1  flex justify-center">
          <span className="text-base font-semibold uppercase text-gray-700">
            بسم الله الرحمن الرحيم
          </span>
        </div>
        <div className="space-y-4 flex-col md:w-10/12 mx-auto overflow-hidden">
          {surah.ayat &&
            surah.ayat.map((item, index) => (
              <div key={index} className="border shadow-md rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className=" md:text-left  ">
                    <h1 className="text-md mb-3 md:mb-0 md:mr-5">
                      {item.nomor}.
                    </h1>
                  </div>
                  <div className="text-center md:text-left mt-3 md:mt-0">
                    <h1 className="text-xl font-bold text-right ">{item.ar}</h1>
                    <p className="text-[14px] text-right mx-auto font-medium mb-2">
                      {formatArabicText(item.tr)}
                    </p>
                    <p className="text-[10px] text-right">"{item.idn}"</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SurahKitab;
