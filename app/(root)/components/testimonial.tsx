"use client"
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const TestimonialsContent = [
    {
        Name: 'Bharat Bajaj',
        CompanyName: 'Founder, AB Capital Services',
        Review: 'Hii Igrow My Biz Team let me take this opportunity to Thank you from the bottom of my Heart. The Campaigns you started running for us gave us recognition and much-needed clients in the form of Leads and my business took off. I got many potential clients and the chain continues even today. All of us have to take different pathways to move ahead in life and let me reaffirm you that the foundation you gave AB Capital social media from the beginning will remain warm in our hearts. We will be in touch and will ask for your support wherever I can',
        media: <Image src={'/assets/images/bharat-bajaj.jpg'} alt='' fill className='object-cover object-top rounded-lg'/>
    },
    {
        Name: 'Vanya',
        CompanyName: 'The Geeky Yougin',
        Review: 'I am so impressed with the details and the planning that it felt like we have been working together for such a long time. Would strongly recommend them if you want anything to do with video.',
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/Mn6NRhWTViw?si=F6UrWm4i3Rm5VKF_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Mayank Shergill',
        CompanyName: 'bigbullboy.com',
        Review: "Team igrow my biz stand with me when i was nothing in industry right now i am having more portfolies in cr's and the main reason behind is their marketing and creativity for optimized my social media.",
        media: <iframe className='object-cover w-full h-full rounded-lg' src="https://www.youtube.com/embed/wvxYQwPdZ5E?si=Lu5MGcXNcmfeANs3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    },
    {
        Name: 'Dr. Pushpendra Tiwari',
        CompanyName: 'Founder of Rehab Masters',
        Review: 'Built a Great Website for me Great efforts from team , listened to all My queries and cleared them all , Thank  you Igrowmybiz',
        media: <Image src={'/assets/images/pushpendra_tiwari.jpeg'} alt='' fill className='object-cover rounded-lg'/>
    },
    {
        Name: 'Dr. Komal Taneja',
        CompanyName: 'shim.co.in',
        Review: 'You people are doing amazing job..I would like to thank you for handling all the social media platforms of SHIM College with so much of efficiency and hard-work. Your team is highly dedicated towards their clients. You understand the needs so well and do the work accordingly.',
        media: <Image src={'/assets/images/komal.jpeg'} alt='' fill className='object-cover object-top rounded-lg'/>
    },
    {
        Name: 'Adey Torry',
        CompanyName: 'Marketing Head at Edtech',
        Review: 'They have a proven track record of success on consultancy firm marketing and they are always ready to go that extra mile for us.',
        media: <Image src={'/assets/images/person-icon.png'} alt='' fill className='object-contain rounded-lg'/>
    },
    {
        Name: 'Manesh Pandey',
        CompanyName: 'Director at Ecommerce Company',
        Review: 'We got everything we needed from an agency including specific results, tangible benefits, positive tone and credible sources.',
        media: <Image src={'/assets/images/person-icon.png'} alt='' fill className='object-contain rounded-lg'/>
    },
    {
        Name: 'Rezwan Shah',
        CompanyName: 'Owner at Herbal Company',
        Review: 'They were very transparent about their pricing and process and made sure we were satisfied with the results.',
        media: <Image src={'/assets/images/person-icon.png'} alt='' fill className='object-contain rounded-lg'/>
    },
]

export default function Testimonials() {
    const [CurrentSlide, setCurrentSlide] = useState<number>(0);
    const nextSlide = () => {
        if (CurrentSlide < TestimonialsContent.length - 1) {
            setCurrentSlide((prev)=> prev + 1);
        }
    }

    const prevSlide = () => {
        if (CurrentSlide !== 0) {
            setCurrentSlide(CurrentSlide - 1)
        }

    }


    return (
        <div className='w-full sm:w-4/5 relative'>
            <div className='overflow-hidden'>
                <div className='flex gap-10 px-[1.3rem] transition-all ease-in-out duration-500' style={{ transform: `translateX(-${CurrentSlide * 100}%)` }}>
                    {TestimonialsContent.map((item, index) => <div key={index} className='flex-shrink-0 flex-grow-0 w-full flex flex-col-reverse sm:flex-row justify-between items-center gap-0 md:gap-10 mb-5 sm:mb-0'>
                        <div className='sm:w-1/2 w-full flex flex-col gap-4 sm:pl-3 -mt-10'>
                            <h3 className=' text-white font-bold text-2xl text-center sm:text-start'>{item.Name}</h3>
                            <p className='text-white/70 font-semibold text-lg text-center sm:text-start'>{item.CompanyName}</p>
                            <p className='text-textColor text-base text-center sm:text-start'>{item.Review}</p>
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <AspectRatio ratio={16 / 9}>
                                {item.media}
                            </AspectRatio>
                        </div>
                    </div>)}
                </div>
            </div>
            <div onClick={prevSlide} className='absolute cursor-pointer select-none left-1/3 sm:-left-10 sm:top-1/2 bg-white p-1 rounded-full'>
                <ChevronLeft />
            </div>
            <div onClick={nextSlide} className='absolute cursor-pointer select-none right-[20%] sm:-right-10 mx-14 sm:mx-0 sm:top-1/2 bg-white p-1 rounded-full'>
                <ChevronRight />
            </div>
        </div>
    )
}
