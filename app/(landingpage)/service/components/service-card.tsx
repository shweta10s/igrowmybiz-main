import { cutive } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


interface ServiceCArdProps {
    heading: string;
    list: string[];
    href: string;
    tagline: string;
}
export default function ServiceCard({ heading, list, href, tagline }: ServiceCArdProps) {
    return (
        <Card className='bg-[#242424] border-0 w-80 mx-auto grow-0 shrink-0'>
            <CardHeader className='gap-4 h-full justify-between'>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-white font-bold text-2xl text-center flex flex-col gap-5'>{heading} <span className={cn(cutive.className, 'text-mainColor text-base -mt-4')}>{tagline}</span></h4>
                    <div className='flex text-gray-400 justify-between sm:justify-evenly lg:justify-start lg:gap-20 items-center text-sm sm:text-base md:text-lg'>
                        <ul className='flex flex-col gap-4 mx-auto'>
                            {list.map((item, index) => <li key={index} className='flex gap-[2px] items-center group/list hover:text-white transition-all ease-in-out delay-75 font-semibold cursor-pointer'><CheckCircle2 className='mr-2 w-4 h-4 group-hover/list:text-green-500 transition-all ease-in-out delay-75' />{item}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='p-[2px] w-fit h-fit rounded-full btn-background mx-auto'>
                    <Link href={href}>
                        <Button className='rounded-full bg-black'>
                            Get Quote
                        </Button>
                    </Link>
                </div>
            </CardHeader>
        </Card>
    )
}
