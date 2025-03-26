"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function StickyIcons() {

    const path = usePathname()

    return (
        <div className={cn('flex flex-col gap-5 h-fit w-fit fixed right-5 lg:top-[80%] top-[80%]  z-50 items-end', path === '/contact' ? 'hidden' : '')}>
            <a className='relative bg-[#bbbbbb] rounded-full p-2 hover:scale-110 transition-all duration-200 group/whatsapp w-12 h-12 flex items-center justify-center' href='https://wa.me/+916264755339'>
                <Image src={"/whatsapp-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 group-hover/whatsapp:hidden' />
                <Image src={"/whatsapp-color-svg.svg"} alt='contact icon' height={50} width={50} className='object-contain h-7 w-7 md:h-8 md:w-8 hidden group-hover/whatsapp:block' />
            </a>
            <div className='p-[2px] w-fit h-fit rounded-full btn-background float'>
                <Link href={'/contact'}>
                    <Button className='rounded-full hover:bg-white bg-[#bbbbbb] text-black font-semibold'>
                        Schedule a Call
                    </Button>
                </Link>
            </div>
        </div>
    )
}
