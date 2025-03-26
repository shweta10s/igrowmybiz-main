import { black_han_sans } from '@/app/fonts'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeService() {

    const data = [
        {
            bgImagePath: "/assets/Hoem pages images/social media marketing.png",
            heading: "Social Media Marketing",
            para: "Where creativity meets connectivity, we're here to make your brand shine brighter than the summer sun. Our main focus is on creating a captivating buzz around your brand, igniting excitement and captivating the interest of your specific target audience.",
            href: '/work/socialmedia'
        },
        {
            bgImagePath: "/assets/Hoem pages images/Paid ads management.png",
            heading: "Paid Ads Management",
            para: "Where data-driven strategies jet fuels your brand's digital dreams. We'll optimize your ad spend through laser-focused targeting, awesome creatives, and the magic of analytics. ",
            href: '/'
        },
        {
            bgImagePath: "/assets/Hoem pages images/Graphic designing.png",
            heading: <>Designing <br /> Services</>,
            para: "At our agency, we don't just edit and design, we sculpt experiences that leave a mark. We transform ordinary footage into extraordinary works of art.",
            href: '/'
        },
        {
            bgImagePath: "/assets/Hoem pages images/Wec development.png",
            heading: <>Web <br /> Devlopment</>,
            para: "Our developers embark on a mission to create a website that captures the essence of the client's business and delivers a wow factor. We also take pride in delivering high-quality results on time.",
            href: '/work/development'
        },
    ]

    return (
        <section className='w-full py-[5%] md:py-[3%] px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 bg-secondaryColor'>
            {/* {data.map((data, index) => <div key={index} className='h-[400px] md:h-full w-full md:hover:w-[200%] transition-all ease-linear duration-200 relative group/animatedService'>
                <Image src={data.bgImagePath} alt='BG Image' fill className='object-cover' />
                <Link href={data.href} className='absolute bottom-0 h-[25%] group-hover/animatedService:h-full transition-all ease-in-out duration-300 bg-opacity-20 backdrop-blur bg-white z-10 w-full'>
                    <div className='flex flex-col justify-center gap-5 absolute bottom-2 md:bottom-6 lg:bottom-8 left-2'>
                        <h2 className='text-2xl font-bold text-gray-900'>{data.heading}</h2>
                        <p className='hidden group-hover/animatedService:block font-medium transition-all ease-in-out'>
                            {data.para}
                        </p>
                        <ChevronRight className='h-8 w-8 bg-white rounded-full' />
                    </div>
                </Link>
            </div>
            )} */}
            {data.map((data, index) => <div key={index} className='service-card-1'>
                <div className='h-[550px] overflow-hidden bg-black relative group/card rounded-xl service-card-2'>
                    <div className='relative h-[400px]'>
                        <Image src={data.bgImagePath} alt='' fill className='object-cover' />
                    </div>
                    <Link href={data.href} className='px-[5%] flex flex-col gap-5 items-center justify-center transition-all duration-500 ease-out h-fit w-full absolute top-[75%] left-0 group-hover/card:top-0 group-hover/card:h-full group-hover/card:backdrop-blur-md'>
                        <h1 className={cn(black_han_sans.className, 'text-white text-3xl text-center')}>{data.heading}</h1>
                        <p className='hidden group-hover/card:block text-textColor text-center transition-all duration-300 delay-300 ease-linear'>{data.para}</p>
                        <ChevronRight className='bg-white h-8 w-8 p-1 rounded-full' />
                    </Link>
                </div>
            </div>)}
        </section>
    )
}
