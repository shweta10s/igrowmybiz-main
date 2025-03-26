import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WorkCard() {
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
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-9 md:gap-5 sm:gap-4 gap-2'>
        { arr?.map((ele,i) => (
            <Link href={`/our-work/work-detail/${ele?.id}`} target='_blank' key={i} className='rounded-2xl relative my-10 border border-white hover:scale-105 transition-transform hover:shadow-white/20 hover:shadow-xl'>
                    <img src={ele?.logo} alt='No preview' className='absolute w-fit h-9 left-14 -top-4 z-20 p-0.5' />
                <div className=''>
                    <div className='absolute z-10 -top-[19px] left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="173" height="42" viewBox="0 0 173 42" fill="none">
                        <path d="M16.2291 0L0 19H173L154.404 0H16.2291Z" fill="#F6E824"/>
                        <path d="M26.7777 31.7391L19.5114 1.41414H153.486L146.219 31.7391C144.836 37.5137 139.672 41.5859 133.734 41.5859H39.2627C33.3246 41.5859 28.1614 37.5136 26.7777 31.7391Z" fill="white" stroke="#292929" stroke-width="0.828283"/>
                    </svg>
                    </div>

                </div>
                <div className='md:h-[60vh] h-[50vh] relative rounded-t-2xl overflow-hidden bg-white'>
                    <Image src={ele?.img} alt='No Preview' fill className='object-cover' />
                </div>
                <div className='bg-[#080808] w-full text-center p-2 rounded-b-2xl'>
                    <h3 className='text-mainColor font-bold text-2xl'>{ele.head}</h3>
                    <p>{ele?.detail}</p>
                </div>
            </Link>
        ))
        }
      
    </div>
  )
}


