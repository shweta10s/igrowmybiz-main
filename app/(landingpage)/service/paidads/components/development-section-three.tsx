import { cutive } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ActivitySquare, Banknote, HeartHandshakeIcon, LightbulbIcon, LineChart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DevelopmentSectionThree() {
    return (
        <section className='pt-10 bg-black'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Why choose us</span><span>Our Speciality</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
                <div className=' mx-auto'>
                    <div className='grid lg:grid lg:grid-cols-4 grid-cols-1 grid-rows-2 gap-4 w-full md:flex justify-center flex-wrap'>
                        <div className='p-[2px] w-full h-28 md:h-full rounded-md col-span-1 row-span-2 whiteShadow transition-all ease-in-out'>
                            <Card className='bg-[#242424] w-full h-full border-0 col-span-1 row-span-2  flex justify-center items-center'>
                                <CardHeader className='items-center'>
                                    <Banknote className='text-mainColor w-10 h-10 md:w-10 md:h-10' />
                                    <h3 className='text-mainColor md:text-xl text-lg wrap font-semibold text-center'>Profitable <span className='text-white'>ad funnels</span></h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-28 md:h-full rounded-md lg:col-span-2 col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-[#242424] border-0 justify-center items-center flex w-full h-full'>
                                <CardHeader className='items-center'>
                                    <LineChart className='text-mainColor w-10 h-10 md:w-10 md:h-10' />
                                    <h3 className='text-mainColor text-lg md:text-xl wrap font-semibold text-center'>5X+ ROI <span className='text-white text-xs'> (Edu, FinTech, Real Estate, Fitness & etc.)</span></h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-28 md:h-full rounded-md col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-[#242424] border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center shrink-0'>
                                    <h3 className='text-mainColor text-lg md:text-xl wrap font-semibold text-center'><span className='text-white'>Know </span>More</h3>
                                    <div className='p-[2px] w-fit h-fit rounded-full btn-background'>
                                        <Link href={'/contact'}>
                                            <Button className='rounded-full bg-black'>
                                                Enquire Now
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-28 md:h-full rounded-md col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-[#242424] border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center'>
                                    <ActivitySquare className='text-mainColor w-10 h-10 md:w-10 md:h-10' />
                                    <h3 className='text-mainColor text-lg wrap font-semibold text-center'><span className='text-white'>Strategic Retargeting </span>& Automation</h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-28 md:h-full rounded-md lg:col-span-2 col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-[#242424] border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center'>
                                    <LightbulbIcon className='text-mainColor w-10 h-10 md:w-10 md:h-10' />
                                    <h3 className='text-mainColor text-lg md:text-xl wrap font-semibold text-center'><span className='text-white'>Innovative ways of </span>digital marketing</h3>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 border-mainColor border-y-4 sm:h-28 h-24 mt-10'>
                <div className='overflow-hidden relative h-full w-[90%] xl:w-4/5 mx-auto my-auto'>
                    <div className='flex absolute logo-scroll-three justify-evenly w-full'>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/css-d2e9f9dd.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/figma-0a1384c5.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/js-30558d7e.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/react-bbd9870e.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/sass-8ac473c4.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                        <div className='relative grow-0 shrink-0 w-12 h-12 sm:w-16 sm:h-16'>
                            <Image src={'/assets/images/wordpress-19466439.png'} alt='bbb' fill className='filter grayscale hover:grayscale-0 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
