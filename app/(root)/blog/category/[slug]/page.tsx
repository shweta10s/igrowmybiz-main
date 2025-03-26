import { blogsData } from '@/blogs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Page({ params }: { params: { slug: string } }) {
    const finalBlog = blogsData.filter((blog) => blog.slug === params.slug)
    const relatedBlogs = blogsData.filter((blog) => blog.category === finalBlog[0].category && blog.slug !== params.slug);
    return (
        <main className='bg-secondaryColor py-24 min-h-screen w-full flex flex-col gap-10 items-center'>
            <section className='md:w-1/2 w-[90%] flex flex-col gap-5 whitespace-normal'>
                <h1 className='text-center text-white font-bold text-2xl tracking-widest w-4/5 mx-auto'>{finalBlog[0].data.heading}</h1>
                <div className='relative w-3/4 mx-auto'>
                    <AspectRatio ratio={16 / 7}>
                        <Image
                            alt='images'
                            src={`/assets/blogs-images/${finalBlog[0].data.heroImge}`}
                            fill
                            className='object-cover rounded-lg border p-1'
                        />
                    </AspectRatio>
                </div>
                <div className='text-textColor flex flex-col gap-5'>
                    {
                        finalBlog[0].data.logContent
                    }
                </div>
            </section>
            {relatedBlogs.length !== 0 && <>
                <h2 className='text-center text-white/75 font-semibold text-lg mx-auto'>Explore More Related Blogs:</h2>
                <section className='w-[90%] grid grid-cols-6 gap-10 mx-auto justify-items-center '>
                    {relatedBlogs.map((blog) => <Link key={blog.id} href={`/blog/${blog.slug}`} className='md:col-span-3 xl:col-span-2 col-span-6'><div className="card relative group/card">
                        <Image src={`/assets/blogs-images/${blog.data.heroImge}`} alt='Image' fill className='object-cover' />
                        <div className='absolute h-full w-full bg-black/60 z-[9999] flex items-center px-2'>
                            <p className='text-white text-xl text-center group-hover/card:scale-0 transition-all duration-300 tracking-wider' style={{ textShadow: "2px 2px 4px #b0b0b0" }}>{blog.data.heading}</p>
                        </div>
                        <div className="card__content">
                            <p className="card__title">{blog.data.heading}</p>
                            <p className="card__description">{blog.data.shortContent.length > 80 ? `${blog.data.shortContent.slice(0, 80)}...` : blog.data.shortContent}</p>
                        </div>
                    </div></Link>)}
                </section></>}
        </main>
    )
}
