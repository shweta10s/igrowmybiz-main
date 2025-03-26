import { cutive } from '@/app/fonts'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'
import Carousel from './carousel'
import { Button } from '@/components/ui/button'


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
export default function DevelopmentSectionSix() {
    return (
        <section className='bg-[#242424] py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>True Stories</span><span>Our Works</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto overflow-x-hidden'>
                <div className=' mx-auto hidden lg:block'>
                    <div className='grid lg:grid lg:grid-cols-4 grid-cols-1 grid-rows-2 gap-4 w-full md:flex justify-center flex-wrap'>
                        <div className='p-[2px] w-full h-full rounded-md col-span-1 row-span-2 whiteShadow transition-all ease-in-out'>
                            <Card className='bg-black cursor-pointer w-full h-full border-0 col-span-1 row-span-2  flex justify-center items-center'>
                                <CardHeader className='items-center'>
                                    <h3 className='text-mainColor text-xl wrap font-semibold text-center'><span className='text-white'>Quik, DSP </span>CA, USA</h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-full rounded-md lg:col-span-2 col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-black cursor-pointer border-0 justify-center items-center flex w-full h-full'>
                                <CardHeader className='items-center'>
                                    <h3 className='text-mainColor text-xl wrap font-semibold text-center'><span className='text-white'>Megha & Parv Trading FZE </span>Dubai, UAE</h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-full rounded-md col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-black border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center shrink-0'>
                                    <h3 className='text-mainColor text-xl wrap font-semibold text-center'><span className='text-white'>Know </span>More</h3>
                                    <div className='p-[2px] w-fit h-fit rounded-full btn-background'>
                                        <a href="https://igrowmybiz.com/" target='_blank'>
                                            <Button className='rounded-full bg-black'>
                                                Enquire Now
                                            </Button>
                                        </a>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-full rounded-md col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-black cursor-pointer border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center'>
                                    <h3 className='text-mainColor text-xl wrap font-semibold text-center'><span className='text-white'>A B Capitals </span>Dubai, UAE</h3>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className='p-[2px] w-full h-full rounded-md lg:col-span-2 col-span-1 row-span-1  whiteShadow transition-all ease-in-out'>
                            <Card className='bg-black cursor-pointer border-0  flex justify-center items-center w-full h-full'>
                                <CardHeader className='items-center'>
                                    <h3 className='text-mainColor text-xl wrap font-semibold text-center'><span className='text-white'>Geoline Global </span>Dubai, UAE</h3>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 overflow-x-scroll px-4 py-2 hideScroll lg:hidden'>
                    {cards.map((item, index) => <div key={index} className='p-[2px] w-fit h-fit rounded-md btn-background'><Card className='cursor-grab w-60 h-32 flex items-center justify-center bg-black border-0 grow-0 shrink-0'>
                        <CardHeader className='text-center select-none'>
                            <h5 className='text-white font-bold text-2xl'>{item.company}</h5>
                            <p className='text-gray-400'>{item.place}</p>
                        </CardHeader>
                    </Card></div>)}
                </div>
                {/* <Carousel/> */}
            </div>
        </section>
    )
}
