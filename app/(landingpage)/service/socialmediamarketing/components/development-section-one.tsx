import { cutive } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DevelopmentSectionOne() {
    return (
        <section className='relative h-[70vh] md:h-[80vh] w-full hero'>
            <div className='absolute sqBg w-full h-full'></div>
            <div className='w-full h-full flex justify-center items-center flex-col gap-10 bg-black'>
                <div className='lg:w-3/4 xl:w-1/2 md:w-2/3 flex flex-col gap-4 relative mt-14'>
                    <p className={cn('text-mainColor text-center text-base sm:text-xl lg:text-3xl  ', cutive.className)}>You are just</p>
                    <h1 className='text-white flex flex-col items-center justify-center text-3xl lg:text-7xl sm:text-5xl gap-1 lg:gap-4 font-bold text-center'>One Post Away</h1>
                    <p className='text-gray-400 text-center text-sm sm:text-base lg:text-lg w-[90%] lg:w-1/2 md:w-full mx-auto'>
                        Build your business to brand in social media with the best content strategy
                    </p>
                </div>
                <div className='p-[2px] w-fit h-fit rounded-full float btn-background'>
                    <Link href={'/service/contact/socialmedia'}>
                        <Button className='px-7 py-6 rounded-full bg-black select-none'>
                            Get your free audit now
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
