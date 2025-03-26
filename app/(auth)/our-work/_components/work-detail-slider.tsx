"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Navigation} from 'swiper/modules';
import Image from 'next/image';

export default function WorkDetailSlider({isColor} : { isColor: string}) {
  const arr = ["","","","","",""]
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='relative h-full w-full'>
      <div ref={prevRef} style={{ backgroundColor:isColor}} className="swiper-button-prev custom-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer bg-gray-500 text-white rounded-sm px-2">
        &larr;
      </div>
      <div ref={nextRef} style={{ backgroundColor:isColor}} className="swiper-button-next custom-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer bg-gray-500 text-white rounded-sm px-2">
        &rarr;
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination , Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper h-full w-full "
      >
        {
          arr?.map((ele,i) => (
          <SwiperSlide key={i} className='relative h-full w-full'>
            <Image src={'/assets/portfolio-images/09.png'} alt='No Preview' fill className='object-' />
          </SwiperSlide>
  
          ))
        }
      </Swiper>

    </div>
      
  )
}
