"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const showingData = [
    {
        heading: "Quote & Meet",
        photo: "4-aea28824.png",
        text: "We provide you with the personalized quote based on your requirment. Through a meeting, we ensure we understand and your goals."
    },
    {
        heading: "Plan & Research",
        photo: "2-0c112352.png",
        text: "After payment, diligent research and enaging content creations. Once you've made the payment, we dive into through research to understand your industry and target audience. We also start creating compelling content for your website."
    },
    {
        heading: "Craft & Code",
        photo: "5-51adb6df.png",
        text: "Our skilled development team brings your website to life. We use cutting-edge technologies and best practices to create a functional and visually apealing site."
    },
    {
        heading: "Revise & Polish",
        photo: "3-af3b6559.png",
        text: "We present the developed website for your review. You can suggest changes, and we work collaborativley to fine-tune every detail untill it aligns perfectly with your vision."
    },
    {
        heading: "Go Live",
        photo: "1-f05cb073.png",
        text: "Once everything is in place and you're satisfied with the result, we lauch your website to the world. Your online presence is now a reality, ready to engage visitors and achieve your goals."
    },
]
export default function Content() {
    const [Data, setData] = useState<number>(0)
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);

        // Set a timeout to remove the fade-in class after the animation completes
        const timer = setTimeout(() => {
            setFadeIn(false);
        }, 250); // Adjust the duration to match your animation duration

        return () => {
            clearTimeout(timer);
        };
    }, [Data]);

    return (
        <div className='w-full grid grid-cols-3 gap-3'>
            <div className='lg:col-span-1 col-span-3 lg:row-start-1 row-start-2 flex flex-col gap-2 lg:justify-between'>
                {showingData.map((item, index) => <div onMouseEnter={() => setData(index)} key={index} className={cn(Data === index ? 'btn-background scale-105 rounded-md p-[2px] whiteShadow transition-all duration-500 ease-in-out w-full lg:h-16' : 'rounded-md p-[2px] whiteShadow transition-all duration-500 ease-in-out w-full lg:h-16')}>
                    <Button className='w-full justify-start h-10 lg:h-full  pl-7 bg-black hover:bg-black'>
                        <p className='md:text-xl text-sm font-normal flex gap-3 items-center'>
                            <span className='font-bold md:text-5xl lg:text-2xl xl:text-5xl text-3xl text-[#333333]'>{index + 1}</span>
                            {item.heading}
                        </p>
                    </Button>
                </div>)}

            </div>
            <div className='lg:col-span-2 col-span-3 row-start-1 flex justify-center items-center bg-black rounded-xl text-white h-96'>
                <div className={cn('col-span-2 gap-6 flex flex-col justify-center items-center bg-black rounded-xl text-white md:px-10 px-1', {
                    'fade-in-element': fadeIn, // Apply the class conditionally
                })}>
                    <Image src={`/assets/images/${showingData[Data].photo}`} alt='data' width={100} height={100} />
                    <div className='w-full flex flex-col items-center justify-center gap-2'>
                        <h4 className='md:text-3xl text-xl font-semibold'>{showingData[Data].heading}</h4>
                        <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
                    </div>
                    <p className='text-center text-gray-400 md:text-base text-sm'>{showingData[Data].text}</p>
                </div>
            </div>

        </div>
    )
}