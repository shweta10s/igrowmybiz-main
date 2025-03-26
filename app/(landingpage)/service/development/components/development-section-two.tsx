/* eslint-disable @next/next/no-img-element */
import { cutive } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function DevelopmentSectionTwo() {
    return (
        <section className='bg-black h-fit pt-8'>
            <div className='lg:flex lg:flex-row-reverse lg:w-4/5 mx-auto items-center'>
                <div className='w-[80%] lg:w-1/2 mx-auto float lg:ml-20'>
                    <img src="/assets/images/testn-7643072f.png" alt="media" className=' ' />
                </div>
                <div className='w-[90%] lg:w-1/2 mx-auto flex flex-col gap-6 lg:gap-6 py-10'>
                    <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold lg:items-start'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>What</span><span>We Offer</span></h2>
                    <p className='text-gray-400 text-center lg:text-left text-sm sm:text-base md:text-lg'>We offer a wide range of services catered towards your business</p>
                    <div className='flex text-gray-400 justify-between sm:justify-evenly lg:justify-start lg:gap-20 items-center text-sm sm:text-base md:text-lg'>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' /> E-commerce</li>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' />Company Profile</li>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' />Landing Page</li>
                        </ul>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' />SEO</li>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' />UI-UX</li>
                            <li className='flex gap-[2px] items-center'><CheckCircle2 className='mr-2 w-4 h-4' />Rebranding</li>
                        </ul>
                    </div>
                    <div className='p-[2px] w-fit h-fit rounded-full btn-background mx-auto lg:mx-0'>
                        <a href="#plans">
                            <Button className='px-7 py-6 rounded-full bg-black'>
                                Explore Our Plans
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='py-2 lg:py-4 border-mainColor border-y-4 lg:h-28 h-24'>
                <div className='overflow-hidden relative h-full w-[90%] xl:w-4/5 mx-auto'>
                    <div className='flex absolute logo-scroll-two  xl:gap-6 gap-2 items-center my-auto -bottom-5'>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/abcap-a3be2e4f.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/bbb-016bebb4.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/geoline-221c69ce.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/magha-6b5980fd.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/more-09e1cd70.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/quikdsp-5b6fab73.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/rapido-710258dc.png'} alt='bbb' fill className='object-contain filte' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-28 h-28'>
                            <Image src={'/assets/images/shim-1e9caefd.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 hidden xl:block w-28 h-28'>
                            <Image src={'/assets/images/abcap-a3be2e4f.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                        <div className='relative grow-0 shrink-0 hidden xl:block w-28 h-28'>
                            <Image src={'/assets/images/bbb-016bebb4.png'} alt='bbb' fill className='object-contain filter grayscale hover:grayscale-0' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
