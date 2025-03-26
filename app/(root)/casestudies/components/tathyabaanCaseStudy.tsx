import Link from 'next/link'
import React from 'react'
import CountdownCaseStudy from './countdown-case'
import Image from 'next/image'

export default function TathyabaanCaseStudy() {
    return (
        <>
            <section className='relative h-screen w-full md:px-[5%] px-5'>
                <div className='relative h-[85%] md:h-[90%] w-full'>
                    <Image src={"/assets/images/books.jpg"} alt='BG Image' fill className='object-cover' />
                    <div className='absolute top-0 left-0 h-full w-full inner-shadow'></div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold letter tracking-widest relative z-20 top-[40%]'>TATHYABAAN CASE STUDY</h2>
                    <div className='grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-0 md:gap-0 absolute -bottom-5 md:left-[5%] z-10 w-full md:w-11/12 bg-secondaryBGColor py-10 px-10 md:px-[2%] lg:px-10 rounded-xl outer-shadow'>
                        <div>
                            <div className='flex flex-col items-center border-r-2 text-center py-2 pr-5 md:pr-0'>
                                <CountdownCaseStudy initialCount={8} symbol={"million+"} timeDuration={100} iterationCount={1} />
                                <p className='text-sm'>Engagement on Instagram</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center py-2 pl-5 md:pl-0 text-center'>
                                <CountdownCaseStudy initialCount={10} symbol={"k"} timeDuration={120} iterationCount={1} />
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
                    <h3 className='text-2xl md:text-3xl text-center md:w-4/5 lg:w-[53%] font-semibold'>How we helped a client reach 10k followers from scratch in just 2 months</h3>
                    <p className='text-textColor md:w-4/5 lg:w-1/2 text-center'>In July 2022, we began a collaboration with Tahthyabaan, a reputable publisher of competitive exam books in MP. With a primary objective of expanding their customer base and establishing a strong online presence, we began to elevate their reach and make their acclaimed study materials accessible to a wider audience beyond a well-established offline market.</p>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-blue-500 w-full lg:w-[40%] h-[300px] md:h-[500px] lg:order-2 relative'><Image src={'/assets/case studies/Tathyabaan objective.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>OBJECTIVE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 pr-5 lg:pr-0'>When we started they had quite a few objectives we needed to fulfill for them:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Online presence: Tathyabaan aimed to expand their online market as they already had a huge offline market before we started working with them and target both online and offline audience.</li>
                                <li>IActive Instagram/Facebook page: With the prevalence of social media usage, our focus was to strategically target the audience on Instagram and Facebook through our content.</li>
                                <li>Digital Branding: We had to create an online identity for the brand across platforms to create a strong connection with the audience hence enhancing their trust.</li>
                                <li>Organic online sale which should reach the aspirants: Our main objective was to only target the audience which would actually buy books and study materials from the brand so we created content as such that it would fulfill our objective.</li>
                                <li>Reach the target audience: Creating a topic or niche specific content helped us to reach the target audience for the brand.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10%]'>
                    <div className='bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg'>
                        <div className='bg-green-500 w-full lg:w-[40%] h-[300px] md:h-[500px] relative'><Image src={'/assets/case studies/tathyaban challenge.png'} alt='' fill className='object-cover'/></div>
                        <div className='py-5 my-auto lg:w-[60%]'>
                            <h3 className='text-3xl font-bold tracking-widest mb-2 pl-5'>CHALLENGE :</h3>
                            <p className='text-textColor md:text-lg pl-5 mb-8 mr-5 lg:pr-0'>Inactive Instagram page: Their Instagram page was very inactive and needed to be focused on and produce enough content on a regular basis so that the page becomes active:</p>
                            <ul className='text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20'>
                                <li>Restricted content and ads: We had to post niche specific content which only a few people would cater to that made it challenging to bring reach and engagement.</li>
                                <li>Limited audience since they only cater to Hindi readers</li>
                                <li>Increase sales through organic promotion: We only promoted them through organic digital marketing which lead to increase in sale.</li>
                                <li>No website: They had no website which reduced half their market because the audience couldn’t understand if it was real and trustworthy enough.</li>
                                <li>No trust and leads since they had zero online market: Since there was no online presence, the audience knew nothing about the brand and it meant no trust which eventually lead to np leads.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-10 md:gap-5 md:justify-between md:px-[10%]'>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>SOLUTIONS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Content strategy to promote their books indirectly</li>
                            <li>Built a community with active engagement</li>
                            <li>Created Content pillars which gave good results</li>
                            <li>Increased growth on Facebook page by organic strategies</li>
                            <li>Created a brand based website</li>
                            <li>Digital Rebranding of their whole brand</li>
                            <li>Book launch ads helped increase sales</li>
                        </ul>
                    </div>
                    <div className='bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2'>
                        <p className='text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest'>RESULTS</p>
                        <ul className='text-textColor list-disc flex flex-col gap-5'>
                            <li>Increase in online engagement and presence</li>
                            <li>Viral posts on Facebook</li>
                            <li>80k reach directly on the page</li>
                            <li>7 million views and ongoing viral videos organically</li>
                            <li>10k followers through content strategies within 2 months</li>
                            <li>7.4 million+ reach and engagement on the Instagram page</li>
                            <li>Lead magnet for ads at CTC 0.5inr and CPL 2inr whereas the average CPL is usually 100inr</li>
                            <li>Increased the online book sales</li>
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
