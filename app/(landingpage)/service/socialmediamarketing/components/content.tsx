"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ContentItem {
    heading: string;
    photo: string;
    text: string;
}

const showingData: ContentItem[] = [
    {
        heading: "Marketing Strategies",
        photo: "4-aea28824.png",
        text: 'Audit and objectives'
    },
    {
        heading: "Content Development",
        photo: "2-0c112352.png",
        text:'Content Creation & Curation'

    },
    {
        heading: "Implementation",
        photo: "5-51adb6df.png",
        text: "Comunity and Influence"

    },
    {
        heading: "Track & Measure",
        photo: "3-af3b6559.png",
        text:"Measure & Quantify"

    },
    {
        heading: "Analysis",
        photo: "1-f05cb073.png",
        text: "Mng & Execute"
    },
]

export default function Content() {
    const [activeFunnelIndex, setActiveFunnelIndex] = useState<number>(0);

    return (
        <div className='w-full grid grid-cols-3 gap-3'>
            <div className='lg:col-span-1 col-span-3 lg:row-start-1 row-start-2 flex flex-col gap-2 lg:justify-between'>
                {showingData.map((item, index) => (
                    <div
                        onMouseEnter={() => setActiveFunnelIndex(index)}
                        onMouseLeave={() => setActiveFunnelIndex(0)} // Reset when mouse leaves
                        key={index}
                        className={cn(
                            'rounded-md p-[2px] whiteShadow transition-all duration-500 ease-in-out w-full lg:h-16',
                            {
                                'btn-background scale-105':
                                    activeFunnelIndex !== null && index <= (activeFunnelIndex as number),
                            }
                        )}
                    >
                        <Button className='w-full justify-start h-10 lg:h-full  pl-7 bg-black hover:bg-black'>
                            <p className='md:text-xl text-sm font-normal flex gap-3 items-center'>
                                <span className='font-bold md:text-5xl lg:text-2xl xl:text-5xl text-3xl text-[#333333]'>
                                    {index + 1}
                                </span>
                                {item.heading}
                            </p>
                        </Button>
                    </div>
                ))}
            </div>
            <div className='lg:col-span-2 col-span-3 row-start-1 flex flex-col justify-center items-center bg-black rounded-xl text-white h-60 lg:h-96 p-6 '>
                <div className='funnel w-full h-full overflow-hidden flex gap-2 flex-col justify-between'>
                    {showingData.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                'bg-white h-7 lg:h-12 text-black font-bold text-xl flex items-center justify-center  transition-all duration-300 ease-in-out',
                                {
                                    'scale-125': index <= (activeFunnelIndex as number),
                                }
                            )}
                        >
                            <div className='text-xs lg:text-sm font-normal lg:font-semibold'>
                                {index <= (activeFunnelIndex as number) ? item.heading : <div className='relative w-5 h-5 lg:w-10 lg:h-10'><Image src={`/assets/images/${item.photo}`} alt='icon' fill className='object-cover'/></div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
