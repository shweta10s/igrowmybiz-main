import { cutive } from '@/app/fonts'
import React from 'react'
import { cn } from '@/lib/utils'
import ServiceCard from '../../components/service-card'


const serviceData = [
    {
        heading: 'Branding Kit',
        listContent: ['Logo Design', 'Brand Identity Design', 'Business Card Design', 'LetterHead', 'Color Palette, Brand Typography & Style Guide','Email Signature','Ads','Miscellaneous Assets'],
        href: '/service/contact/design'
    },
    {
        heading: 'Videos & Graphic Design',
        listContent: ['Explainer Videos', 'Carousels', 'Instagram Reels', 'Youtube Videos', 'Videography and video editing','Social Media Creatives','Email Design Templates','Banner ads & Online ads design'],
        href: '/service/contact/design'
    },
    {
        heading: 'Other Designing Services',
        listContent: ['Illustration Packages', 'Packaging Design', '2D & 3D Animations', 'Ads Shoots & Production'],
        href: '/service/contact/design'
    },
]
export default function SectionFive() {
    return (
        <section className='bg-black py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Our most popular</span><span>Website Packages</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto lg:mx-0 plans-card'>
                <div className='w-full flex flex-wrap lg:flex-row lg:flex-nowrap gap-6 justify-between'>
                    {serviceData.map((items)=><ServiceCard key={items.heading} tagline='Package' heading={items.heading} list={items.listContent} href={items.href} />)}                    
                </div>
            </div>
        </section>
    )
}
