import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Page({ searchParams }: { searchParams: { category: string } }) {
    const blogsRoutes = [
        {
            href: "/blog/category?category=trending",
            label: "Trending",
        },
        {
            href: "/blog/category?category=ai",
            label: "Ai",
        },
        {
            href: "/blog/category?category=marketing",
            label: "Marketing",
        },
        {
            href: "/blog/category?category=branding",
            label: "Branding",
        },
        {
            href: "/blog/category?category=strategies",
            label: "Strategies",
        },

    ]
    return (
        <main className='min-h-screen w-full bg-secondaryColor py-28 flex flex-col gap-10'>
            <h1 className='text-center text-white font-bold text-5xl flex flex-col gap-2'>Our Blogs <span className='text-center text-white font-normal text-base'>search by categories</span></h1>

            <section className='grid grid-cols-6 gap-10 w-4/5 mx-auto justify-items-center'>
                {blogsRoutes.map((route) => <Link key={route.href} href={route.href} className='md:col-span-3 xl:col-span-2 col-span-6'><div className="card relative group/card">
                    <Image src={`/assets/images/dubai.jpg`} alt='Image' fill className='object-cover' />
                    <div className='absolute h-full w-full bg-black/60 z-[9999] flex items-center px-2'>
                        <p className='text-white text-xl text-center w-full group-hover/card:scale-110 transition-all duration-300 tracking-wider' style={{ textShadow: "2px 2px 4px #b0b0b0" }}>{route.label}</p>
                    </div>
                </div></Link>)}

            </section>
        </main>
    )
}
