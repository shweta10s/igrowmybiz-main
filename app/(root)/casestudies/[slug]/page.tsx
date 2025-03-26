import Image from 'next/image'
import React from 'react'
import ABcapitalsCaseStudy from '../components/abcapitalsCaseStudy'
import MayankShergilCaseStudy from '../components/mayankShergilCaseStudy'
import ShimCaseStudy from '../components/shimCaseStudy'
import TathyabaanCaseStudy from '../components/tathyabaanCaseStudy'
import FootstepsCaseStudy from '../components/footstepsCaseStudy'

export default function Page({ params }: { params: { slug: string } }) {

    if (params.slug == "abcapitals")
        return (
            <main className='w-full bg-secondaryColor text-white'>
                <ABcapitalsCaseStudy />
            </main>
        )

    else if (params.slug == "mayankShergil")
        return (
            <main className='w-full bg-secondaryColor text-white'>
                <MayankShergilCaseStudy />
            </main>
        )

    else if (params.slug == "shim")
        return (
            <main className='w-full bg-secondaryColor text-white'>
                <ShimCaseStudy />
            </main>
        )

    else if (params.slug == "tathyabaan")
        return (
            <main className='w-full bg-secondaryColor text-white'>
                <TathyabaanCaseStudy />
            </main>
        )

    else if (params.slug == "footsteps")
        return (
            <main className='w-full bg-secondaryColor text-white'>
                <FootstepsCaseStudy />
            </main>
        )

    else return (
        <main className='bg-secondaryColor h-screen w-full flex justify-center items-center px-10'>
            <div className='relative w-full h-[500px]'>
                <Image src={"/assets/images/error-404.png"} alt='Image' fill className='object-cover md:object-contain' />
            </div>
        </main>
    )
}
