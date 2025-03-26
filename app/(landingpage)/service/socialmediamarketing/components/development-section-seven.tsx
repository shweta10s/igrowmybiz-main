import { cutive } from '@/app/fonts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Reviews = [
    {
        Comment: 'Working with iGrow was great as they are very knowledgeable and experienced in this field of work.',
        Icon: '43.jpg',
        Name: 'Harry',
        Place: 'Tracy USA',
        position: 'Director of Real Estate Agency'
    },
    {
        Comment: 'We are very impressed with the results we were able to achieve after collaborating with iGrow.',
        Icon: '45.jpg',
        Name: 'Mukesh Singh',
        Place: 'York, UK',
        position: 'HOD in Trading Company'
    },
    {
        Comment: 'We were looking for a marketing agency that could help us with our consultancy startup, iGrow did not let us down.',
        Icon: '65.jpg',
        Name: 'Md Azman',
        Place: 'Abu Dhabi, UAE',
        position: 'Owner at Consulting Company'
    },
    {
        Comment: 'They were very transparent about their pricing and process and made sure we were satisfied with the results.',
        Icon: '38.jpg',
        Name: 'Rezwan Shah',
        Place: 'Dubai, UAE',
        position: 'Owner at Herbal Company'
    },
    {
        Comment: 'We have seen a significant increase in traffic and leads since we started our marketing with iGrow.',
        Icon: '90.jpg',
        Name: 'Dr. Reena',
        Place: 'Banglore, India',
        position: 'Owner at Fintech'
    },
    {
        Comment: 'We got everything we needed from an agency including specific results, tangible benefits, positive tone and credible sources.',
        Icon: '6.jpg',
        Name: 'Manesh Pandey',
        Place: 'Bay Area, USA',
        position: 'Director at Ecommerce Company'
    },
    {
        Comment: 'They have a proven track record of success on consultancy firm marketing and they are always ready to go that extra mile for us.',
        Icon: '84.jpg',
        Name: 'Adey Torry',
        Place: 'Dubai, UAE',
        position: 'Marketing Head at Edtech'
    },
    {
        Comment: 'So impressed with the results in the first time that we continue working with them for 2 years now.',
        Icon: '50.jpg',
        Name: 'Ritesh Bajaj',
        Place: 'Mumbai, India',
        position: 'Co-founder at Startup'
    },
]

export default function DevelopmentSectionSeven() {
    return (
        <section className='bg-black py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Hear form our</span><span>Happy Customers</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto'>
                <div className='md:flex flex-wrap gap-4 justify-center hidden'>
                    {Reviews.map((item, index) =>
                        <div key={index} className='w-fit h-fit p-[1px] whiteShadow cursor-pointer rounded-md transition-all delay-150'>
                            <Card className='bg-[#242424] border-0 w-80'>
                                <CardContent className='pb-0'>
                                    <div className='flex flex-col gap-4 p-2'>
                                        <p className='text-gray-400'>{item.Comment}</p>
                                        <Separator className='bg-gray-400' />
                                        <div className='flex gap-4 items-center'>
                                            <Avatar>
                                                <AvatarImage src={`/assets/images/${item.Icon}`} />
                                                <AvatarFallback>{item.Name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className='font-bold text-gray-400 flex flex-col'>{item.Name} <span className='font-normal text-gray-400 text-xs'>{item.position}</span> <span className='italic font-normal text-xs'>{item.Place}</span></p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
                <div className='flex md:hidden overflow-x-scroll hideScroll gap-2 px-5 py-2'>
                    {Reviews.map((item, index) =>
                        <div key={index} className='w-fit shrink-0 grow-0 h-fit p-[2px] whiteShadow cursor-pointer rounded-md transition-all delay-150'>
                            <Card className='bg-[#242424] border-0 h-fit'>
                                <CardContent className='pb-0'>
                                    <div className='flex flex-col gap-4 p-2'>
                                        <p className='text-gray-400'>{item.Comment}</p>
                                        <Separator className='bg-gray-400' />
                                        <div className='flex gap-4 items-center'>
                                            <Avatar>
                                                <AvatarImage src={`/assets/images/${item.Icon}`} />
                                                <AvatarFallback>{item.Name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className='font-bold text-gray-400 flex flex-col'>{item.Name} <span className='font-normal text-gray-400 text-xs'>{item.position}</span> <span className='italic font-normal text-xs'>{item.Place}</span></p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                </div>
                <div className='p-[2px] w-fit h-fit rounded-full float btn-background mx-auto mt-10'>
                    <Link href={'/service/contact/socialmedia'}>
                        <Button className='px-7 py-6 rounded-full bg-black select-none'>
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
