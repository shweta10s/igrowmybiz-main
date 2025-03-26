import React from 'react'
import PortfolioNav from '../our-portfolio/_components/portfolio-nav'
import { cn } from '@/lib/utils'
import { inter } from '@/app/fonts'
import WorkCard from '../our-portfolio/_components/work-card'

export default function OurWork() {
  return (
    <div className={cn('bg-[#292929] text-white h-full w-full min-h-screen ' , inter.className)}>
      <PortfolioNav />
      <div className='max-w-6xl mx-auto py-10 xl:p-0 p-6 max-md:text-center'>
        <h3 className='text-mainColor font-semibold md:text-xl text-base uppercase'>Our Work</h3>
        <h1 className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold my-4'>"Transforming Concepts into <span className='text-mainColor'> Digital Solutions"</span></h1>
        <WorkCard />
      </div>
    </div>
  )
}
