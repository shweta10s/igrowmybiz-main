import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { WebDevForm } from './components/web-dev-form'

export default function Page() {
    return (
        <div className='min-h-screen bg-secondaryColor'>

            <div className={cn('bg-none h-fit w-full relative px-5 lg:px-20 flex justify-between items-center smoothWhiteShadow')}>
                <Link href={'/services'}>
                    <div className='relative h-16 w-28 flex items-center left-8'>
                        <Image
                            src={'/assets/images/new logo-a4aa82bd.png'}
                            alt='logo'
                            fill
                            className='transition-all delay-75 ease-in-out scale-150 object-contain'
                        />
                    </div>
                </Link>
                {/* <div className='p-[2px] w-fit h-fit rounded-full btn-background'>
                </div> */}
            </div>

            <div className='p-6'>
                <div className='h-full w-full max-w-2xl mx-auto flex flex-col gap-10'>
                    <h2 className="text-center sm:text-start py-8 text-white text-2xl sm:text-3xl lg:text-4xl font-bold">Website Development Form</h2>
                    <WebDevForm />
                </div>
            </div>

        </div>
    )
}
