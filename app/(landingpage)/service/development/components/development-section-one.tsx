import { cutive } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DevelopmentSectionOne() {
    return (
        <section className='relative h-[70vh] md:h-[90vh] w-full hero'>
            <div className='absolute sqBg w-full h-full'></div>
            <div className='w-full h-full flex justify-center items-center flex-col gap-10 bg-black'>
                <div className='lg:w-3/4 xl:w-1/2 md:w-2/3 flex flex-col gap-4 relative mt-14'>
                    <p className={cn('text-mainColor text-center text-base sm:text-xl lg:text-3xl  ', cutive.className)}>We help you</p>
                    <h1 className='text-white flex flex-col items-center justify-center text-3xl lg:text-7xl sm:text-5xl gap-1 lg:gap-4 font-bold text-center'>Create your own <span>Online Presence</span></h1>
                    <p className='text-gray-400 text-center text-sm sm:text-base lg:text-lg w-[90%] lg:w-4/5 md:w-full mx-auto'>
                        Empowering your digital aspirations, we guide you in crafting a distinct online presence. Our expertise fuels your journey to establish an impactful and unique identity in the virtual realm.
                    </p>
                </div>
                <div className='p-[2px] w-fit h-fit rounded-full float btn-background'>
                    <Link href={'/service/contact/development'}>
                        <Button className='px-7 py-6 rounded-full bg-black select-none'>
                            Get free quote now
                        </Button>
                    </Link>
                </div>
                <div>
                    <ChevronDown className='text-white w-12 h-12 font-bold arrow-1' />
                    <ChevronDown className='text-white w-12 h-12 font-bold -my-6 arrow-2' />
                </div>
            </div>
        </section>
    )
}
