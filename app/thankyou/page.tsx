import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../(landingpage)/service/development/development.css'

export default function Page() {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-black flex-col gap-5 px-10 sm:px-0'>
            <Image src={"/assets/images/thanks.webp"} alt='Image' height={400} width={400} />
            <p className='text-[#8a8a8a] text-center'>Thank You for submitting the form. Our Team will get in touch with you soon.</p>
            <div className='p-[2px] w-fit h-fit rounded-full float btn-background mt-5'>
                <Link href={'/'}>
                    <Button className='px-7 py-6 rounded-full bg-black'>
                        Back To Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}
