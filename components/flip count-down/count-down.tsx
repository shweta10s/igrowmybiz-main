"use client"
import React, { useEffect, useState } from 'react';
import FlipCard from './flip-card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

function CountDownKammo() {
    const [timeBetweenDates, setTimeBetweenDates] = useState(0);
    const [stop, setStop] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const countToDate = new Date().getTime() + 60 * 1000;
        let previousTimeBetweenDates: any;

        const interval = setInterval(() => {
            const currentDate: any = new Date();
            const newTimeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

            if (newTimeBetweenDates >= 0) {
                // Only update the state when the time is not negative
                if (newTimeBetweenDates !== previousTimeBetweenDates) {
                    setTimeBetweenDates(newTimeBetweenDates);
                    previousTimeBetweenDates = newTimeBetweenDates;
                }
            } else {
                // If the countdown reaches negative values, set the time to 0
                setTimeBetweenDates(0);
                clearInterval(interval); // Stop the countdown
                setStop(true);
            }
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const handleRoute = ()=>{
        router.push('/contact')
    }

    return (
        <div className='relative'>
            <div className="flex gap-[0.5em]  justify-center">
                <div className="flex flex-col gap-[0.1em] items-center">
                    <div className="md:text-xl text-sm text-white">Hours</div>
                    <div className="flex gap-[0.1em]">
                        <FlipCard value={Math.floor(timeBetweenDates / 3600 / 10)} />
                        <FlipCard value={Math.floor(timeBetweenDates / 3600) % 10} />
                    </div>
                </div>
                <div className="flex flex-col gap-[0.1em] items-center">
                    <div className="md:text-xl text-sm text-white">Minutes</div>
                    <div className="flex gap-[0.1em]">
                        <FlipCard value={Math.floor((timeBetweenDates / 60) % 60 / 10)} />
                        <FlipCard value={Math.floor((timeBetweenDates / 60) % 10)} />
                    </div>
                </div>
                <div className="flex flex-col gap-[0.1em] items-center">
                    <div className="md:text-xl text-sm text-white">Seconds</div>
                    <div className="flex gap-[0.1em]">
                        <FlipCard value={Math.floor(timeBetweenDates % 60 / 10)} />
                        <FlipCard value={timeBetweenDates % 10} />
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-14 left-1/2 -translate-x-1/2 w-full'>
                {
                    !stop ?
                        <div onClick={handleRoute} className={cn('p-[2px] w-full h-fit rounded-full btn-background animate-bounce cursor-pointer')}>
                            <div className={cn('bg-white text-black rounded-full text-center text-lg')}>
                                Schedule a FREE Call
                            </div>
                        </div>
                        :
                        <div className={cn("bg-white p-[2px] w-full h-fit rounded-full cursor-not-allowed")}>
                            <div className={cn('rounded-full text-center text-lg bg-textColor text-black')}>
                                Schedule a FREE Call
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default CountDownKammo;
