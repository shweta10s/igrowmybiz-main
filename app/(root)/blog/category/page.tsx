import Image from 'next/image'
import React from 'react'
import { blogsData } from '../../../../blogs'
import Link from 'next/link'

export default function Page({ searchParams }: { searchParams: { category: string } }) {
    const finalBlogs = blogsData.filter((data) => data.category === searchParams.category)
    if (finalBlogs.length === 0) {
        return (
            <main className='bg-secondaryColor h-screen w-full flex justify-center items-center px-10'>
                <div className='relative w-full h-[500px] flex items-center justify-center'>
                    <h1 className='text-white font-bold text-xl lg:text-5xl text-center -leading-6' >Sorry No blogs available. 😔😔</h1>
                </div>
            </main>
        )
    }
    return (
        <main className='min-h-screen w-full bg-secondaryColor py-24 flex flex-col gap-10'>
            <h1 className='text-center text-white font-bold text-5xl'>{searchParams.category} Blogs</h1>
            <section className='grid grid-cols-6 gap-10 w-4/5 mx-auto justify-items-center'>
                {finalBlogs.map((blog) => <Link key={blog.id} href={`/blog/${blog.slug}`} className='md:col-span-3 xl:col-span-2 col-span-6'><div className="card relative group/card">
                    <Image src={`/assets/blogs-images/${blog.data.heroImge}`} alt='Image' fill className='object-cover' />
                    <div className='absolute h-full w-full bg-black/60 z-[9999] flex items-center px-2'>
                        <p className='text-white text-xl text-center group-hover/card:scale-0 transition-all duration-300 tracking-wider' style={{ textShadow: "2px 2px 4px #b0b0b0" }}>{blog.data.heading}</p>
                    </div>
                    <div className="card__content">
                        <p className="card__title">{blog.data.heading}</p>
                        <p className="card__description">{blog.data.shortContent.length > 80 ? `${blog.data.shortContent.slice(0, 80)}...` : blog.data.shortContent}</p>
                    </div>
                </div></Link>)}
            </section>
        </main>
    )
}
