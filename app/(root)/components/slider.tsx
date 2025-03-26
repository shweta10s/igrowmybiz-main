"use client"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    const items = [
        {
            content: <>
                <div className="h-full w-full relative">
                    <Image src={'/assets/Hoem pages images/IGMB Home page 1.png'} alt="" fill className="object-cover" />
                </div>
            </>
        },
        {
            content: <>
                <div className="h-full w-full relative">
                    <Image src={'/assets/Hoem pages images/IGMB Home page 2.png'} alt="" fill className="object-cover" />
                </div>
            </>
        },
        {
            content: <>
                <div className="h-full w-full relative">
                    <Image src={'/assets/Hoem pages images/IGMB Home page 3.png'} alt="" fill className="object-cover" />
                </div>
            </>
        },
        {
            content: <>
                <div className="h-full w-full relative">
                    <Image src={'/assets/Hoem pages images/IGMB Home page 4.png'} alt="" fill className="object-cover" />
                </div>
            </>
        },
    ];

    const handleNext = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + items.length) % items.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection("next");
            handleNext();
        }, 2000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, items]);

    return (
        <div className="w-full h-full">
            <div className="relative w-full overflow-hidden h-full">
                <div
                    className={`h-full flex transition-transform transform ${direction === "next" ? "translate-x-0" : "-translate-x-full"
                        }`}
                    style={{
                        width: `${items.length * 100}%`,
                        transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="w-1/2 h-full bg-white p-4 rounded-lg"
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mt-4 flex justify-center gap-5">
                <button
                    className="mx-1 p-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 text-white"
                    onClick={handlePrev}
                >
                    <ArrowBigLeft />
                </button>
                <button
                    className="mx-1 p-2 rounded-full bg-gradient-to-l from-orange-500 to-orange-300 text-white"
                    onClick={handleNext}
                >
                    <ArrowBigRight />
                </button>
            </div> */}
        </div>
    );
}