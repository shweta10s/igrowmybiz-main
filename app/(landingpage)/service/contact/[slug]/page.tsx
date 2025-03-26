import React from 'react'
import { ContactForm } from './components/form'
import NavBar from '../../development/components/service-nav-bar'
import '../../development/development.css'

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <main className='bg-black h-screen w-full flex items-center justify-center px-5 sm:px-20 md:px-40 lg:px-60'>
                <div className='w-full lg:w-1/2 sm:w-4/5 flex items-center justify-center bg-[#242424] py-10 rounded-lg flex-col gap-3 px-5'>
                    <h2 className='text-white text-[40px] font-semibold'>Contact <span className='text-[#F6E824]'>us</span></h2>
                    <p className='text-[#8a8a8a] text-center'>Fill out this form and our team will contact you soon</p>
                    <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
                    <ContactForm routeForm={params.slug} />
                </div>
            </main>
        </>
    )
}
