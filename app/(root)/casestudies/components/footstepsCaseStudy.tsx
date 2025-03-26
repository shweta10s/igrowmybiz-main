import Link from 'next/link'
import React from 'react'
import CountdownCaseStudy from './countdown-case'
import Image from 'next/image'

export default function FootstepsCaseStudy() {
    return (
        <>
            <section className='relative h-screen w-full md:px-[5%] px-5'>
                <div className='relative h-[85%] md:h-[90%] w-full'>
                    <Image src={"/assets/images/usa-image.jpg"} alt='BG Image' fill className='object-cover' />
                    <div className='absolute top-0 left-0 h-full w-full inner-shadow'></div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold letter tracking-widest relative z-20 top-[40%]'>FOOTSTEPS CASE STUDY</h2>
                    <div className='grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-0 md:gap-0 absolute -bottom-5 md:left-[5%] z-10 w-full md:w-11/12 bg-secondaryBGColor py-10 px-10 md:px-[2%] lg:px-10 rounded-xl outer-shadow'>
                        <div>
                            <div className='flex flex-col items-center border-r-2 py-2 text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={90} symbol={"%"} timeDuration={50} iterationCount={5} />
                                <p className='text-sm'>Seats occupancy achieved</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center py-2 pl-5 md:pl-0 text-center'>
                                <CountdownCaseStudy initialCount={2} symbol={"months+"} timeDuration={120} iterationCount={1} />
                                <p className='text-sm'>Followers growth</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center md:border-l-2 border-r-2 border-t-2 md:border-t-0 py-2 text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={80} symbol={"k"} timeDuration={20} iterationCount={4} />
                                <p className='text-sm'>Page Reach</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center py-1 text-center pl-5 md:pl-0 border-t-2 md:border-t-0'>
                                <CountdownCaseStudy initialCount={7} symbol={"million+"} timeDuration={125} iterationCount={1} />
                                <p className='text-sm'>Views on viral video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-14 pb-10'>
                <div className='flex flex-col items-center gap-5'>
                    <h3 className='text-2xl md:text-3xl text-center md:w-4/5 lg:w-[53%] font-semibold'>How we filled nearly 90% seats of a newly started Amazon DSP</h3>
                    <p className='text-textColor md:w-4/5 lg:w-1/2 text-center'>Footsteps LLC, a US-based Amazon delivery service partner, commenced its operations in Mid 2021 and our collaboration with them began in November of the same year.</p>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-blue-500 w-full lg:w-[40%] h-[300px] md:h-[500px] lg:order-2 relative'><Image src={'/assets/case studies/footsteps objective.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>OBJECTIVE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 pr-5 lg:pr-0'>If a person wants an Amazon DSP, they have specific rules and regulations an individual needs to adhere to. Understanding their main goal, our team accurately initiated work, ensuring we cater to all their necessary and unique requirements. The main goals were:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>In 2 months, we had to achieve the target of bringing drivers through digital marketing strategies.</li>
                                <li>Showcase a positive workplace environment that fosters growth and well-being on digital platforms</li>
                                <li>Channelize our digital marketing efforts primarily on Facebook and engage with the target audience efficiently by getting organic leads everyday.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-green-500 w-full lg:w-[40%] h-[300px] md:h-[500px] relative'><Image src={'/assets/case studies/footsteps challenge.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>CHALLENGE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 mr-5 lg:pr-0'>Initially we had to work with a challenging timeline to work in and swift actions to meet the client’s demand:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Limited digital presence</li>
                                <li>Time constraints (2 months)</li>
                                <li>250 drivers fulfilling all our needs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-5 md:justify-between md:px-[10%]'>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>SOLUTIONS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Organic marketing via content strategies for short & long term goals</li>
                            <li>Understood the audience and digitally marketed it to cater to the target audience</li>
                            <li>Paid Social Media ads initially because of tight timeline, organically later on</li>
                            <li>Building their Google profile from scratch</li>
                            <li>Fast and effective Approach to meet the requirements</li>
                        </ul>
                    </div>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>RESULTS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Impressive 90% seats occupancy just through digital marketing</li>
                            <li>Brand gained enough prominence that potential workers approached us proactively, reflecting a positive impact.</li>
                            <li>Urgent Hiring target achieved in less than 2 months</li>
                            <li>After 2 plus year client is still working with us</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-5 items-center mt-5'>
                    <p className='text-2xl'>Still Not Convinced ?</p>
                    <Link href="/contact" className='px-5 py-2 text-sm sm:text-base text-black rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500'>
                        Contact Us
                    </Link>
                </div>

            </section>
        </>
    )
}
