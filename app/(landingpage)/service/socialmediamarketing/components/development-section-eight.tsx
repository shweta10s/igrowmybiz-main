import { cutive } from '@/app/fonts'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import React from 'react'


const FAQs = [
    {
        Question: 'How can I choose the right marketing agency for my consultancy business?',
        Answer: 'Define your needs and goals, research different agencies, and choose the one aligned with your goals.'
    },
    {
        Question: 'What are the benefits of working with a marketing agency for a consultancy business?',
        Answer: 'The benefits include faster growth, better reach, and more creativity.'
    },
    {
        Question: 'What are the services you offer to a consultancy business?',
        Answer: 'We provide comprehensive marketing for your consultancy, encompassing website development, landing page creation, and SEO.'
    },
    {
        Question: 'How can we contact you?',
        Answer: 'You can fill our contact form by clicking the button liked below.'
    },
]
export default function DevelopmentSectionEight() {
    return (
        <section className='bg-[#242424] py-10'>
            <div className='w-[80%] lg:w-[70%] mx-auto flex flex-col items-center gap-6 lg:gap-6 mb-6'>
                <h2 className='text-white text-center flex flex-col gap-2 text-3xl md:text-4xl font-bold'><span className={cn(cutive.className, 'text-mainColor font-semibold text-xl sm:text-lg md:text-xl ')}>Clear your doubts</span><span>Some FAQs</span></h2>
                <div className="h-[3px] lg:w-[30%] w-[80%] divider rounded-none"></div>
            </div>
            <div className='w-[80%] md:w-[70%] mx-auto'>
                {FAQs.map((item, index) =>
                    <Accordion key={index} type="single" collapsible className="w-full mt-2">
                        <AccordionItem value="item-1" className='border-b-0 flex flex-col gap-2'>
                            <AccordionTrigger className='text-white no-underline bg-black rounded-md px-4'>{item.Question}</AccordionTrigger>
                            <AccordionContent>
                                <p className='bg-[#161616] text-gray-400 p-2 rounded-md'>
                                    {item.Answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )}
            </div>
        </section>
    )
}
