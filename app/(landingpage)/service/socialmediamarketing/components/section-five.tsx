import { cutive } from '@/app/fonts'
import React from 'react'
import ServiceCard from '../../components/service-card'
import { cn } from '@/lib/utils'


const serviceData = [
    {
        heading: 'Instagram',
        listContent: ['1 Platform', 'Monthly Social Media Calender', '24 Posts Per Month', 'Upto 10 Reels (15 sec - 30 sec)', 'Upto 10 Static', '10 Images with Editing', '3 Engaging Stroies per week', 'Basic Monthly Performance Report', 'Dedicated Account Manager'],
        href: '/service/contact/socialmedia'
    },
    {
        heading: 'Facebook',
        listContent: ['2 Platform', 'Monthly Social Media Calender', '30 Posts Per Month', 'Upto 15 Reels (15 sec - 30 sec)', 'Upto 15 Static', '15 Images with Editing', 'Daily Engagement/Interactions', '4 Engaging Stroies per week', 'Detailed Monthly Performance Report', 'Weekly Analysis Report', 'Dedicated Account Manager'],
        href: '/service/contact/socialmedia'
    },
    {
        heading: '+2 Platform',
        listContent: ['4 Platform', 'Monthly Social Media Calender', '42 Posts Per Month', 'Upto 18 Reels (15 sec - 30 sec)', 'Upto 25 Static', '20 Images with Editing', 'Daily Engagement/Interactions', '6 Engaging Stroies per week', 'Detailed Monthly Performance Report', 'Weekly Analysis Report', 'Dedicated Account Manager'],
        href: '/service/contact/socialmedia'
    },
]
export default function SectionFive() {
    return (
        <section className='bg-black py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Our most popular</span><span>Social Media Marketing Packages</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto lg:mx-0 plans-card'>
                <div className='w-full flex flex-wrap lg:flex-row lg:flex-nowrap gap-6 justify-between'>
                    {serviceData.map((items)=><ServiceCard key={items.heading} tagline='Marketing' heading={items.heading} list={items.listContent} href={items.href} />)}                    
                </div>
            </div>
        </section>
    )
}
