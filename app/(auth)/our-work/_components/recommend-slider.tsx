"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Navigation} from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function RecommendedSlider({isColor} : { isColor: string}) {

    const arr =[
        {
            img:'/assets/portfolio-images/02.png',
            logo:'/assets/portfolio-images/02a.png',
            head:'E-commers Website',
            detail:'Start chatting about the work you need, and we’ll get started right away.',
            id:'pachmarhi',
    
        },
        {
            img:'/assets/portfolio-images/03.png',
            logo:'/assets/portfolio-images/03a.png',
            head:'E-commers Website',
            detail:'Start chatting about the work you need, and we’ll get started right away.',
            id:'eurotech',
    
        },
        {
            img:'/assets/portfolio-images/04.png',
            logo:'/assets/portfolio-images/04a.png',
            head:'Hotel Website',
            detail:'Start chatting about the work you need, and we’ll get started right away.',
            id:'hotelnatraj',
    
        },
        // {
        //     img:'/assets/portfolio-images/05.png',
        //     logo:'/assets/portfolio-images/05b.png',
        //     head:'Dental Clinic Website',
        //     detail:'Start chatting about the work you need, and we’ll get started right away.',
        //     id:'vishnu-dental',
    
        // },
        // {
        //     img:'/assets/portfolio-images/06.png',
        //     logo:'/assets/portfolio-images/06a.png',
        //     head:'GYM Website',
        //     detail:'Start chatting about the work you need, and we’ll get started right away.',
        //     id:'gym',
    
        // },
        // {
        //     img:'/assets/portfolio-images/07.png',
        //     logo:'/assets/portfolio-images/07a.png',
        //     head:'AB Capital',
        //     detail:'Start chatting about the work you need, and we’ll get started right away.',
        //     id:'abcapital',
    
        // },
    ]
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className='relative h-full w-full'>
      <div ref={prevRef} style={{ backgroundColor:isColor}} className="swiper-button-prev custom-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 -left-4 z-10 cursor-pointer bg-gray-500 text-white rounded-sm px-2">
        &larr;
      </div>
      <div ref={nextRef} style={{ backgroundColor:isColor}} className="swiper-button-next custom-swiper-button-next absolute top-1/2 transform -translate-y-1/2 -right-4 z-10 cursor-pointer bg-gray-500 text-white rounded-sm px-2">
        &rarr;
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination , Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper"
      >
        {
          arr?.map((ele,i) => (
          <SwiperSlide key={i} className=''>
            <Link href={`/our-work/work-detail/${ele?.id}`} target='_blank' className='rounded-2xl my-10 border border-white hover:scale-105 transition-transform hover:shadow-white/20 hover:shadow-xl'>
                    <img src={ele?.logo} alt='No preview' className='absolute w-fit h-9 left-14 top-2.5 z-20 p-0.5' />
                <div className=''>
                    <div className='absolute z-10 top-1.5 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="173" height="42" viewBox="0 0 173 42" fill="none">
                        <path d="M16.2291 0L0 19H173L154.404 0H16.2291Z" fill="#F6E824"/>
                        <path d="M26.7777 31.7391L19.5114 1.41414H153.486L146.219 31.7391C144.836 37.5137 139.672 41.5859 133.734 41.5859H39.2627C33.3246 41.5859 28.1614 37.5136 26.7777 31.7391Z" fill="white" stroke="#292929" stroke-width="0.828283"/>
                    </svg>
                    </div>

                </div>
                <div className='md:h-[40vh] h-[40vh] relative rounded-t-2xl overflow-hidden bg-white'>
                    <Image src={ele?.img} alt='No Preview' fill className='object-cover' />
                </div>
                <div className='bg-[#080808] w-full text-center p-2 rounded-b-2xl'>
                    <h3 className='text-mainColor font-bold md:text-2xl sm:text-xl text-base'>{ele.head}</h3>
                    <p className="md:text-base text-sm">{ele?.detail}</p>
                </div>
            </Link>
          </SwiperSlide>
  
          ))
        }
      </Swiper>

    </div>
      
  )
}
