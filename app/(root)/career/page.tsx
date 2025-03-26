import { FileText, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { CareerForm } from './components/careerForm'

export default function Page() {
  return (
    <main className='w-full bg-secondaryColor'>
      <section className='pt-32 flex flex-col gap-20 items-center'>
        <div className='relative h-96 w-10/12 rounded-xl overflow-hidden'>
          <div className='bg-black bg-opacity-20 sm:bg-opacity-30 absolute top-0 left-0 h-full w-full z-10'></div>
          <Image src={"/assets/images/career.jpg"} alt='igromybiz-carrer' fill className='object-cover' />
        </div>

        <div className='flex flex-col gap-10 items-center px-5 sm:px-0 mb-10'>
          <h1 className='text-white text-2xl font-bold text-center'>Careers @ IgrowMyBiz</h1>
          <p className='text-textColor text-center'>
            Are you looking for career opportunities in <span className='text-white text-lg font-bold'>DIGITAL MARKETING?</span>
            <br />
            <span className='text-white text-lg font-bold'>APPLY NOW</span> to be a part of the team!
          </p>
        </div>
      </section>

      <section className='flex flex-col lg:flex-row gap-10 lg:gap-0 px-[5%] py-10'>
        <div className='flex flex-col gap-10 lg:w-1/2 items-center'>
          <div className='bg-secondaryBGColor py-5 pl-10 pr-5 rounded-lg w-fit flex flex-col gap-7 items-center'>
            <h2 className='text-xl text-white font-semibold border-b border-[#8e8e8e] w-fit px-10 pb-2 text-center'>Who can apply?</h2>
            <ul className='flex flex-col gap-4 list-disc text-textColor text-sm'>
              <li>Have experience in digital marketing</li>
              <li>1+ years of marketing agency experience</li>
              <li>2+ years of field work experience</li>
              <li>Work from office available if you live in Bhopal or are ready to relocate</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5 items-center mt-5'>
            <h2 className='text-xl text-white font-semibold border-b border-[#8e8e8e] w-fit px-10 pb-2 text-center'>How to apply?</h2>
            <div className='grid gap-2'>
              <a href="mailto:career@igrowmybiz.com" className='flex items-center gap-5 text-textColor bg-secondaryBGColor px-10 py-3 rounded-full hover:scale-105 hover:text-white transition-all duration-300'>
                <Mail className='h-6 w-6' />
                career@igrowmybiz.com
              </a>
              <a href="https://in.linkedin.com/company/igrowmybiz" className='flex items-center gap-5 text-textColor bg-secondaryBGColor px-10 py-3 rounded-full hover:scale-105 hover:text-white transition-all duration-300'>
                <Linkedin className='h-6 w-6' />
                LinkedIn
              </a>
              <a href="" className='flex items-center gap-5 text-textColor bg-secondaryBGColor px-10 py-3 rounded-full hover:scale-105 hover:text-white transition-all duration-300'>
                <FileText className='h-6 w-6' />
                Fill the given form
              </a>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 bg-secondaryBGColor rounded-lg px-10 py-10'>
          <CareerForm />
        </div>
      </section>
    </main>
  )
}
