import Link from 'next/link'
import React from 'react'
import CountdownCaseStudy from './countdown-case'
import Image from 'next/image'

export default function MayankShergilCaseStudy() {
    return (
        <>
            <section className='relative h-screen w-full md:px-[5%] px-5'>
                <div className='relative h-[85%] md:h-[90%] w-full'>
                    <Image src={"/assets/images/trade.jpg"} alt='BG Image' fill className='object-cover' />
                    <div className='absolute top-0 left-0 h-full w-full inner-shadow'></div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold letter tracking-widest relative z-20 top-[40%]'>MAYANK SHERGILL CASE STUDY</h2>
                    <div className='grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-0 md:gap-0 absolute -bottom-5 md:left-[5%] z-10 w-full md:w-11/12 bg-secondaryBGColor py-10 px-10 md:px-[2%] lg:px-10 rounded-xl outer-shadow'>
                        <div>
                            <div className='flex flex-col items-center text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={350} symbol={"+"} timeDuration={10} iterationCount={5} />
                                <p className='text-sm'>Client Growth</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center border-l-2 py-2 pl-5 md:pl-0 text-center'>
                                <CountdownCaseStudy initialCount={5} symbol={"Cr"} timeDuration={200} iterationCount={1} />
                                <p className='text-sm'>Portfolio Worth</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center md:border-l-2 border-t-2 md:border-t-0 py-2 text-center pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={10} symbol={"%"} timeDuration={100} iterationCount={1} />
                                <p className='text-sm'>Financial Growth</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center border-l-2 py-2 text-center pl-5 md:pl-0 border-t-2 md:border-t-0'>
                                <CountdownCaseStudy initialCount={3} symbol={"INR"} timeDuration={400} iterationCount={1} />
                                <p className='text-sm'>Lowest CPL, High Quality Leads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-14 pb-10'>
                <div className='flex flex-col items-center gap-5'>
                    <h3 className='text-2xl md:text-3xl text-center md:w-4/5 lg:w-[53%] font-semibold'>How we built an empire from 1000 portfolios to now more than 5 crore portfolios of traders</h3>
                    <p className='text-textColor md:w-4/5 lg:w-1/2 text-center'>Mayank Shergill is a forex trader based in Patna, India. They initially started in 2012 but resumed its operations in 2022. The company is a team of 10 members providing effective strategies for Trading in the Forex Market. While working with us, they founded a new brand called BigBullBoy. Initially in July 2022, our collaboration started with a clear objective to find more investors and helping in building their client’s trust. Targeting potential clients and clients to learn trading through their classes and programs.</p>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row rounded-lg overflow-hidden'>
                        <div className='bg-blue-500 w-full lg:w-[40%] h-[300px] md:h-[500px] lg:order-2 relative'><Image src={'/assets/case studies/MS objective.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>OBJECTIVE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 pr-5 lg:pr-0'>We started with a very clear objective that they wanted us to target and eventually achieve:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Grow Social Media Profile</li>
                                <li>Find investors & traders</li>
                                <li>Trust Building with their clients</li>
                                <li>Increase their maximum reach</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-green-500 w-full lg:w-[40%] h-[300px] md:h-[500px] relative'><Image src={'/assets/case studies/MS problem.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>CHALLENGE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 mr-5 lg:pr-0'>They were starting out with a tight budget to invest in their business, hence we had to deliver all their requirements according to that:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>No budget for ads: Due to their limited budget, they lacked funds for generating advertisements, compelling us to adopt an organic marketing.</li>
                                <li>Lack of Trust in social media Profile: The company encountered difficulties as it had not established trust among its client yet and its market profile was relatively low.</li>
                                <li>Social Media was filled with bots: Their social media account was filled with bots, Despite having a substantial number of followers, the engagement on their posts were almost nothing.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-5 md:justify-between md:px-[10%]'>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>SOLUTIONS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Build Content Strategy: We aimed in creating a relevant content strategy and create engaging content to boost their company’s visibility and interaction with its target audience.</li>
                            <li>Digital Branding: We created compelling and consistent online presence to establish their company as a strong identity.</li>
                            <li>Content Optimization: We optimized their content which involved making people friendly, engaging and aligned content.</li>
                            <li>Launched website: They did not have a website of their own which in itself makes a client trust in you. So, we decided to launch a website for them which lead to followers.</li>
                            <li>PR Building: We crafted and implemented strategic efforts to enhance the company’s reputation, strengthen client relations and establish a positive image.</li>
                        </ul>
                    </div>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>RESULTS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>350+ clients: Starting from getting their first client through Instagram, they now have an empire with dealing with more than 350 clients now.</li>
                            <li>5 crores+ portfolios: They only had INR1000 to trade when we collaborated with them but through our consistent hard work and efforts, they now have more than INR 5 crores portfolios at the moment.</li>
                            <li>Paid ads via meta were generated at average CPL is 3 INR with quality leads for their course students and clients lead generation.</li>
                            <li>Growth in reach: They grew Financially from literally nothing to now an increase in their reach to 9,990%.</li>
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
