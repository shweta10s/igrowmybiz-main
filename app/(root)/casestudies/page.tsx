import { oxygen } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cardData = [
  {
    head: "AB Capitals Case Study",
    href: "/casestudies/abcapitals",
    para: "Boosting Dubai based business consultancy’s leads to three times than original We started working with them in April 2022 to help them establish themselves as the go-to destination for comprehensive business advices and consultancy services for businesses across the globe.",
    imagePath: "/assets/images/dubai.jpg",
    iconPath: "/assets/images/uae-logo.png",
    iconName: "UAE",
  },
  {
    head: "Mayank Shergil Case Study",
    href: "/casestudies/mayankShergil",
    para: "From 1000 portfolios to more than 5 crores, we’ve built an empire Commencing in July 2022, our partnership had a distinct aim which was to attract investors, build client trust, and bring in students for their training master class and programs.",
    imagePath: "/assets/images/trade.jpg",
    iconPath: "/assets/images/ind-logo.png",
    iconName: "IND",
  },
  {
    head: "SHIM Case Study",
    href: "/casestudies/shim",
    para: "Sant Hirdaram institute of Management, Bhopal is an only women’s institute and the only institute in MP which provides IMBA right after 12th class along with MBA programs. It is committed to facilitate holistic-cum-professional development of the students in terms of realistic learning with endowed ethical values.",
    imagePath: "/assets/images/girls-group.jpg",
    iconPath: "/assets/images/ind-logo.png",
    iconName: "IND",
  },
  {
    head: "Tathyabaan Case Study",
    href: "/casestudies/tathyabaan",
    para: "Starting from scratch, we made it happen: 10k followers on Instagram in just 2 months In July 2022, we partnered with a renowned publisher of competitive exam books in MP. Our main goal was to broaden their customer reach and establish a robust online presence beyond their established offline market.",
    imagePath: "/assets/images/books.jpg",
    iconPath: "/assets/images/ind-logo.png",
    iconName: "IND",
  },
  {
    head: "Footsteps USA Case Study",
    href: "/casestudies/footsteps",
    para: "Filled nearly 90% seats for a newly started Amazon Delivery Service Partner A US-based Amazon delivery service partner, commenced its operations in Mid 2021 and our collaboration with them began in November of the same year.",
    imagePath: "/assets/images/usa-image.jpg",
    iconPath: "/assets/images/usa-logo.png",
    iconName: "USA",
  },
]


export default function Page() {
  return (
    <main className='w-full bg-[#141414] py-10'>
      <section className='pt-24 flex flex-col gap-2 items-center px-5'>
        <h2 className={cn('text-3xl md:text-4xl text-white font-semibold border-b border-[#8e8e8e] px-10 md:px-40 pb-5', oxygen.className)}>Case Studies</h2>
      </section>

      <section className='px-5 sm:px-[15%] md:px-5 lg:px-[15%] my-10 grid gap-10'>

        {cardData.map((data, index) => <div key={index} className='group/animatedIcon flex flex-col md:flex-row w-fit md:px-0 md:pl-[3%] bg-[#242424] rounded-lg border-none hover:border-solid border-[#8e8e8e] hover:border-2 hover:scale-105 transition-all duration-300 ease-in-out'>
          <div className='md:w-1/2 flex flex-col gap-5 md:gap-10 py-5 md:py-16 px-5 sm:px-10 order-2 md:order-1 md:pr-14'>
            <h3 className='text-white text-2xl font-semibold'>{data.head}</h3>
            <p className='text-[#8e8e8e] text-sm'>{data.para}</p>
            <div className='p-[2px] w-fit h-fit rounded-full btn-background float'>
              <Link href={data.href}>
                <Button className='rounded-full hover:bg-white bg-[#bbbbbb] text-black font-semibold'>
                  Read More
                </Button>
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 relative md:order-2'>
            <div className='relative h-[220px] w-full md:h-full z-10'>
              <Image src={data.imagePath} alt='Image' fill className='object-cover rounded-lg md:rounded-none md:rounded-tr-lg md:rounded-br-lg' />
            </div>
            <div className='absolute top-1 right-1 z-10 bg-[#242424] rounded-full p-3 flex gap-2 items-center'>
              <div className='group-hover/animatedIcon:pr-11 relative -z-10 transition-all duration-300 ease-linear'>
                <span className='text-white text-center text-lg'>{data.iconName}</span>
              </div>
              <Image src={data.iconPath} alt='Icon' height={40} width={40} className='absolute right-2 sm:right-[10px]' />
            </div>
          </div>
        </div>
        )}
      </section>
    </main>
  )
}
