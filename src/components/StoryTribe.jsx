import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import quranku1 from '../assets/StoryTribe/quranku_1.png';
import quranku2 from '../assets/StoryTribe/quranku_2.png';
import quranku3 from '../assets/StoryTribe/quranku_3.png';
import quranku4 from '../assets/StoryTribe/quranku_4.png';
import quranku5 from '../assets/StoryTribe/quranku_5.png';
import quranku6 from '../assets/StoryTribe/quranku_6.png';
import quranku7 from '../assets/StoryTribe/quranku_7.png';

export default function App() {
  return (
    <>
    <div className='flex justify-center items-center bg-gray-100 mb-10'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full lg:w-1/2 shadow-2xl rounded-xl" 
      >
        <SwiperSlide><img src={quranku1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={quranku7} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
