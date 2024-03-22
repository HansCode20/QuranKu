import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import Shalat from "../assets/Shalat.jpg";
import Quran from "../assets/Al-Quran.jpg";
import Doa from "../assets/Doa.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS untuk animasi AOS

const About = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
      <div className="m-10 flex flex-col items-center mx-auto max-w-screen-lg">
        <div className="header flex w-full justify-center">
          <h2 className="font-black pb-10 mb-20 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3 justify-center text-center">
            Information Blog
          </h2>
        </div>
        <div className="grid w-full gap-10 md:grid-cols-3 p-5">
          <div
            data-aos="zoom-in"
            className="bg-white w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl"
          >
            <div>
              <img
                src={Shalat}
                alt="SHalat"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="  p-6">
              {/* Konten Kartu Pertama */}
              <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900">
                <span className="flex items-center gap-1">
                  <CiCalendarDate className="w-4 h-4" />
                  {time.toLocaleDateString("id-ID")}
                </span>
                <span>
                  {time.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <h3 className="mb-4 font-semibold text-2xl">
                <Link
                  to="/Sholat"
                  className="transition-all text-blue-900 hover:text-blue-600"
                >
                  Jadwal Shalat →
                </Link>
              </h3>
              <p className="text-sky-800 text-sm mb-0">
                "Shalat bukan hanya rutinitas harian, tetapi juga momen suci
                untuk merenungkan kebesaran Allah dan memperbaiki diri. Ia
                adalah pilar utama dalam membangun hubungan yang kuat dengan
                Sang Pencipta."
              </p>
            </div>
          </div>
          {/* Kartu kedua dan ketiga akan memiliki struktur yang sama */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-white w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl"
          >
            <div>
              <img
                src={Doa}
                alt="Al-Quran"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="  p-6">
              <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900">
                <span className="flex items-center gap-1">
                  <CiCalendarDate className="w-4 h-4" />
                  {new Date().toLocaleDateString("id-ID")}
                </span>
                <span>
                  {time.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <h3 className="mb-4 font-semibold text-2xl">
                <Link
                  to="/surah"
                  className="transition-all text-blue-900 hover:text-blue-600"
                >
                  Surah →
                </Link>
              </h3>
              <p className="text-sky-800 text-sm mb-0">
                "Dan apabila kamu Membaca atau dibacakan Al-Quran, maka
                dengarkanlah dengan seksama, dan bacalah yang benar agar kamu
                mendapat rahmat."
              </p>
            </div>
          </div>
          {/* Kartu ketiga akan memiliki struktur yang sama */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="bg-white w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl"
          >
            <div>
              <img src={Quran} alt="" className="w-full h-48 object-cover" />
            </div>
            <div className="  p-6">
              <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900">
                <span className="flex items-center gap-1">
                  <CiCalendarDate className="w-4 h-4" />
                  {new Date().toLocaleDateString("id-ID")}
                </span>
                <span>
                  {time.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <h3 className="mb-4 font-semibold text-2xl">
                <Link
                  to="/doa"
                  className="transition-all text-blue-900 hover:text-blue-600"
                >
                  Doa →
                </Link>
              </h3>
              <p className="text-sky-800 text-sm mb-0">
                "Saat kamu merasa lelah dan terpuruk, ingatlah bahwa doa adalah
                tangga menuju langit yang membawamu kepada Allah."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
