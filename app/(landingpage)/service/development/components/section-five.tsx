import { cutive } from '@/app/fonts'
import React from 'react'
import { cn } from '@/lib/utils'
import ServiceCard from '../../components/service-card'


const serviceData = [
    {
        heading: 'E-commerce',
        listContent: ['Upto 100 products', 'Payment Gateway', 'Admin Dashboard', 'User Accounts', 'On Page SEO'],
        href: '/service/contact/development'
    },
    {
        heading: 'Landing Page',
        listContent: ['Fast Single-page site', 'Responsive Design', 'Custom Form with DB', 'Thank You Page', 'On Page SEO'],
        href: '/service/contact/development'
    },
    {
        heading: 'Company',
        listContent: ['Upto 10 pages', 'Responsive Design', 'Custom Form with DB', 'Blogs', 'On Page SEO'],
        href: '/service/contact/development'
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
                    {serviceData.map((items)=><ServiceCard key={items.heading} tagline='Website' heading={items.heading} list={items.listContent} href={items.href} />)}                    
                </div>
            </div>
        </section>
    )
}
