import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RoutesClient from './routes-client'
import NavBarMobile from './navbar-mobile'
import { cn } from '@/lib/utils'

export default function NavBar() {
    
    return (
        <header>
            <nav className={cn('bg-secondaryColor  border-b flex justify-center top-0 left-0 w-full border-white/10 z-50 fixed')}>
                <div className='w-full flex items-center justify-between px-10 md:px-[3%] lg:px-[7%] py-6'>
                    <div className='relative h-5 w-40 hover:scale-125 transition-all ease-in-out duration-500'>
                        <Link href="/">
                            <Image src={"/assets/images/new logo-a4aa82bd.png"} alt='logo' fill className='object-contain' />
                        </Link>
                    </div>
                    <div className=''>
                        <div className='hidden lg:flex md:gap-5 lg:gap-10 '>
                            <RoutesClient />
                        </div>
                        <div className='lg:hidden'>
                            <NavBarMobile />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
