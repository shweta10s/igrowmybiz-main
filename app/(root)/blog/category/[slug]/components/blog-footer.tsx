import React from 'react'
import { BlogForm } from './blog-form'
import Link from 'next/link'

export default function BlogFooter() {
    return (
        <footer className='bg-secondaryBGColor flex flex-col md:flex-row gap-10 px-[10%] py-10'>
            <div className='md:w-[65%] flex flex-col gap-5 my-auto'>
                <h2 className='text-white text-3xl'>Hello Guys</h2>
                <p className='text-textColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum quibusdam rem voluptatibus. Quiet voluptatem provident consequatur illo dolores facere aut animi quam reiciendis. Magnam, cupiditate? Enim, earum eaque.</p>
                <Link href="/contact" className='px-4 md:px-6 py-1 md:py-2 text-lg text-black sm:text-base rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500'>
                    Contact Us
                </Link>
            </div>
            <div className='md:w-[35%]'>
                <BlogForm />
            </div>
        </footer>
    )
}
