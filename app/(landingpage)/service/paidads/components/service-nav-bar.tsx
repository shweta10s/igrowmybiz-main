"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PaidAdsNavBar() {
    const [logoWidth, setLogoWidth] = useState(false); // Initial logo width
    const scrollThreshold = 300; // Adjust this value as needed
    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setLogoWidth(true); // Change logo width when scrolled down
        } else {
            setLogoWidth(false); // Reset logo width when scrolled back up
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Remove scroll event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav className={cn(!logoWidth ? 'bg-none h-14 w-full fixed top-0 z-20 px-5 lg:px-20 flex justify-between items-center py-10 transition-all delay-75 ease-in-out ' : 'bg-black transition-all delay-75 ease-in-out h-10 w-full fixed top-0 z-20 px-5 lg:px-20 flex justify-between items-center py-8 smoothWhiteShadow')}>
            <Link href={'/services'}>
                <div className='relative h-full w-28 flex items-center'>
                    <Image
                        src={'/assets/images/new logo-a4aa82bd.png'}
                        alt='logo'
                        width={300}
                        height={logoWidth ? 100 : 300}
                        className='transition-all delay-75 ease-in-out'
                    />
                </div>
            </Link>
            <div className='p-[2px] w-fit h-fit rounded-full btn-background'>
                <Link href={'/service/contact/paidads'}>
                    <Button className='rounded-full bg-black'>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}
