"use client"
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const cards = [
    {
        company: 'Quik, DSP',
        place: 'CA, USA'
    },
    {
        company: 'Tour to Pachmarhi',
        place: 'Madhya Pradesh, India'
    },
    {
        company: 'A B Capitals',
        place: 'Dubai, UAE'
    },
    {
        company: 'Geoline Global',
        place: 'Dubai, UAE'
    },
    {
        company: 'Megha & Parv Trading FZE',
        place: 'Dubai, UAE'
    },
]
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next card
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to move to the previous card
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    // Automatically slide to the next card
    useEffect(() => {
        const timer = setInterval(() => {
            nextCard();
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    return (
        <div className='flex gap-10 px-4 py-2' style={{transform:`translateX(-${currentIndex * 270}px)`,transition: 'transform 0.5s ease-in-out',}}>
            {cards.map((item, index) => <Card key={index} onClick={()=> setCurrentIndex(index)} className={cn(index === currentIndex? 'border-2 border-red-800':'border-0','cursor-grab w-60 h-60 flex items-center justify-center bg-black grow-0 shrink-0')}>
                <CardHeader className='text-center select-none'>
                    <h5 className='text-white font-bold text-2xl'>{item.company}</h5>
                    <p className='text-gray-400'>{item.place}</p>
                    <p className='text-white'>{index}</p>
                </CardHeader>
            </Card>)}
        </div>
    );
};

export default Carousel;
