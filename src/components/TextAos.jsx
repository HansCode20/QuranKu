import React, { useEffect } from "react";
import syahadat from "../assets/Carouselimg/Syahadat.png";
import shalat from "../assets/Carouselimg/shalat.png";
import zakat from "../assets/Carouselimg/zakat.png";
import Puasa from "../assets/Carouselimg/Puasa.png";
import Naikhaji from "../assets/Carouselimg/Naik haji.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS untuk animasi AOS

const Carousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-20">
        <h1 className="text-5xl font-bold text-center pb-10 m-4">
          <span className="text-blue-700">Pillars</span> of Muslim
        </h1>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5 text-sm">
          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div
                data-aos="zoom-in"
                className="w-[120px] h-[120px] bg-white  rounded-xl p-4 flex justify-center items-center"
              >
                <img src={syahadat} alt="Syahadat" className="w-[50px]" />
              </div>
            </div>
            <div
              className="bg-white shadow-lg rounded-md p-4 hover:bg-blue-50 "
              data-aos="fade-right"
            >
              <h1 className="font-bold text-xl pb-4">1. Syahadat </h1>
              <p>
                Syahadat adalah sebuah pengakuan keyakinan dalam agama Islam.
                Terdiri dari dua kalimat, yaitu "La ilaha illallah, Muhammadur
                rasulullah" yang artinya "Tidak ada Tuhan selain Allah, dan
                Muhammad adalah utusan Allah." Syahadat merupakan salah satu
                dari lima rukun iman dalam Islam dan menjadi dasar utama bagi
                seorang Muslim dalam memperkuat keyakinannya.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div
                data-aos="zoom-in"
                className="w-[120px] h-[120px]   bg-white   md: rounded-xl md:p-4 flex justify-center items-center"
              >
                <img src={shalat} alt="Shalat" className="w-[65px]" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-blue-50 "
            >
              <h1 className="font-bold text-xl pb-4">2. Shalat </h1>
              <p>
                Shalat adalah ibadah yang dilakukan oleh umat Islam dengan cara
                melakukan serangkaian gerakan dan bacaan yang diatur secara
                khusus. Ibadah shalat dilakukan sebagai wujud ketaatan dan
                pengabdian kepada Allah. Shalat merupakan salah satu dari lima
                rukun Islam yang wajib dilakukan oleh setiap Muslim
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl  gap-10">
            <div className="w-full md:w-[750px] flex justify-center md:justify-end">
              <div
                data-aos="zoom-in"
                className="w-[120px] h-[120px]  h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center"
              >
                <img src={zakat} alt="zakat" className="w-[65px]" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className=" bg-white   shadow-lg rounded-xl p-4 hover:bg-blue-50 "
            >
              <h1 className="font-bold text-xl pb-4">3. Zakat</h1>
              <p>
                Zakat adalah salah satu dari lima rukun Islam yang merupakan
                kewajiban bagi umat Muslim yang mampu untuk menyisihkan sebagian
                dari harta mereka untuk diberikan kepada orang-orang yang
                membutuhkan.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div
                data-aos="zoom-in"
                className=" w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center"
              >
                <img src={Puasa} alt="Puasa" className="w-[65px]" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-blue-50 "
            >
              <h1 className="font-bold text-xl pb-4">4. Puasa</h1>
              <p>
                Puasa adalah praktik ibadah yang dilakukan oleh umat Islam
                sebagai salah satu dari lima rukun Islam. Puasa dilakukan selama
                bulan Ramadan, bulan kesembilan dalam penanggalan Hijriyah, yang
                dianggap sebagai bulan suci dalam agama Islam. Selama bulan
                Ramadan, umat Islam berpuasa dari terbit fajar hingga terbenam
                matahari, menahan diri dari makan, minum, dan hubungan suami
                istri.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="flex justify-center md:justify-end ">
              <div
                data-aos="zoom-in"
                className="w-[120px]  h-[120px] bg-white rounded-xl p-4 flex justify-center items-center"
              >
                <img src={Naikhaji} alt="naikhaji" className="w-[60px]" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-blue-50 hover:from-red-50 "
            >
              <h1 className="font-bold text-xl pb-4">5. Naik Haji.</h1>
              <p>
                Naik haji adalah salah satu dari lima rukun Islam yang merupakan
                kewajiban bagi umat Islam yang mampu secara fisik, finansial,
                dan mental untuk melaksanakannya sekali seumur hidup. Haji
                adalah ibadah yang dilakukan dengan mengunjungi Kota Makkah di
                Arab Saudi, tempat suci umat Islam, dan melakukan serangkaian
                ritual yang telah ditetapkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
