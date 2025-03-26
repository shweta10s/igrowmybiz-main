import React from 'react'
import Image from 'next/image'
import CountdownCaseStudy from './countdown-case'
import Link from 'next/link'

export default function ABcapitalsCaseStudy() {
    return (
        <>
            <section className='relative h-screen w-full md:px-[5%] px-5'>
                <div className='relative h-[85%] md:h-[90%] w-full'>
                    <Image src={"/assets/images/dubai.jpg"} alt='BG Image' fill className='object-cover' />
                    <div className='absolute top-0 left-0 h-full w-full inner-shadow'></div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold letter tracking-widest relative z-20 top-[40%]'>AB CAPITAL CASE STUDY</h2>
                    <div className='grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-0 md:gap-0 absolute -bottom-5 md:left-[5%] z-10 w-full md:w-11/12 bg-secondaryBGColor py-10 px-10 md:px-[2%] lg:px-10 rounded-xl outer-shadow'>
                        <div>
                            <div className='flex flex-col items-center text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={450} symbol={"+"} timeDuration={10} iterationCount={5} />
                                <p className='text-sm'>leads just in a month via ads</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center border-l-2 py-2 pl-5 md:pl-0 text-center'>
                                <CountdownCaseStudy initialCount={50} symbol={"%"} timeDuration={25} iterationCount={1} />
                                <p className='text-sm'>increased engagement through SMM</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center md:border-l-2 border-t-2 md:border-t-0 py-2 text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={30} symbol={"%"} timeDuration={40} iterationCount={1} />
                                <p className='text-sm'>Traffic increase on the website</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center border-l-2 py-2 text-center pl-5 md:pl-0 border-t-2 md:border-t-0'>
                                <CountdownCaseStudy initialCount={2} symbol={"AED"} timeDuration={750} iterationCount={1} />
                                <p className='text-sm'>Lowest CPL, High Quality Leads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-14 pb-10'>
                <div className='flex flex-col items-center gap-5'>
                    <h3 className='text-2xl md:text-3xl text-center md:w-4/5 lg:w-[53%] font-semibold'>How we assisted a company to recover from a Hacked website to now producing triple leads for them</h3>
                    <p className='text-textColor md:w-4/5 lg:w-1/2 text-center'>AB Capital, a business consultancy in Dubai, UAE, which helps you set up your business from scratch and advices and audits your business.</p>
                    <p className='text-textColor md:w-4/5 lg:w-1/2 text-center'>We started working with them in April 2022 to help them establish themselves as the go-to destination for comprehensive business advice and consultancy services for ventures across UAE. Remarkably, the client expressed satisfaction within a mere 15 days of starting the collaboration.</p>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-blue-500 w-full lg:w-[40%] h-[300px] md:h-[500px] lg:order-2 relative'><Image src={'/assets/case studies/ab capitals objective.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>OBJECTIVE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 pr-5 lg:pr-0'>With an extensive list of requirements, as the previous agency they worked with failed to deliver results, our task was to address and fulfill their needs. Some of these included:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Lead generation via strategic SMM and targeted ads</li>
                                <li>Target a High Quality Audience</li>
                                <li>Generate Regular Enquires</li>
                                <li>Get a Certain amount of leads via ads on a strict budget</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-green-500 w-full lg:w-[40%] h-[300px] md:h-[500px] relative'><Image src={'/assets/case studies/ab capitals challenge.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>CHALLENGE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 mr-5 lg:pr-0'>Navigating the challenges of working with a foreign based company, we dedicated ourselves in understanding their work pattern and the specific things they aimed on. The following challenges emerged during the time:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Their previous website and SEO was hacked by Japanese servers</li>
                                <li>Organic reach was dead</li>
                                <li>Inactive social media platforms</li>
                                <li>Less Time, More Results</li>
                                <li>Previous agency resorted to unethical ways for reach, causing their website to get flagged as adult content from Google</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-5 md:justify-between md:px-[10%]'>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>SOLUTIONS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Generated Ad Funnels for Russia, UAE & Indian Target Audience</li>
                            <li>Audit the website & streamline it in an organized way</li>
                            <li>Increase Organic Traffic & Search Engine Optimisation</li>
                            <li>Launched a new Website, redesigned with better UI & UX</li>
                            <li>Worked on their inactive social media platforms through proactive efforts</li>
                            <li>Optimised organic queries for better results</li>
                            <li>Implement Strategic Content Creation on Social Media Platforms</li>
                        </ul>
                    </div>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>RESULTS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Generated lowest CPL of 2 dirhams for high quality leads</li>
                            <li>450 leads in a just month via ads</li>
                            <li>Increased engagement to 50% through SMM</li>
                            <li>30% Traffic increase on the website through active posting</li>
                            <li>Delivered a user-friendly website within a week</li>
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
