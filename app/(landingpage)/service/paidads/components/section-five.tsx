import { cutive } from '@/app/fonts'
import React from 'react'
import { cn } from '@/lib/utils'
import ServiceCard from '../../components/service-card'


const serviceData = [
    {
        heading: 'Grow',
        listContent: ['1 Search Network Ads Channel', '2 Types ofAd Campaign', 'Targeting Basic Demographic + Interest', 'Image + Carousel Ad Formate', 'Ad Spend upto 30,000/month', '5 Creatives/ month', '1 - Quarter Landing Pages', 'Limited Reporting', 'Strategy Meeting in 4 weeks', 'Campaign Optimization Every 8 days', '5 Days Timeline Campaign Setup from Intro', '1 Countrie'],
        href: '/service/contact/paidads'
    },
    {
        heading: 'Grow Fast',
        listContent: ['2 Search Network Ads Channel', 'Upto 4 Types ofAd Campaign', 'Targeting Advanced (Lookalike+Remarketing)', 'Image + Carosel + Slideshow Ad Format', 'Remarketing', 'Ad Spend upto 60,000/month', '8 Creatives/ month', '1 - Bi-Monthly Landing Pages', 'Pixel Conversion Tracking', 'Limited Reporting', 'Strategy Meeting in 2 weeks', 'Campaign Optimization Every 7 days', '3 Days Timeline Campaign Setup from Intro', 'upto 2 Countries'],
        href: '/service/contact/paidads'
    },
    {
        heading: 'Leader of the',
        listContent: ['3 Search Network Ads Channel', 'Upto 6 Types ofAd Campaign', 'Targeting Basic + Advanced + Custom Lists/Databses', 'Image + Carosel + Slideshow + Edited Video Ad Format', 'Remarketing + Custom Database', 'Ad Spend upto 1,50,000/month or 15% of the ad spent', '10 + 3 video edit upto 15sec Creatives/ month', 'Custom Landing Pages', 'Custom Conversion Tracking', 'Full Support Reporting', 'Strategy Meeting in a week', 'Campaign Optimization Every 2 days', '2 Days Timeline Campaign Setup from Intro', 'upto 3 Countries'],
        href: '/service/contact/paidads'
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
