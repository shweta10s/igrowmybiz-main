"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'


export default function RoutesClient() {
    const path = usePathname()
    const routes = [
        {
            href: "/",
            label: "Home",
            active: path === "/"
        },
        {
            href: "/aboutus",
            label: "About Us",
            active: path === "/aboutus"
        },
        {
            href: "/services",
            label: "Services",
            active: path === "/services"
        },
        {
            href: "/casestudies",
            label: "Case Studies",
            active: path === "/casestudies"
        },
        {
            href: "/career",
            label: "Career",
            active: path === "/career"
        },
        {
            href: "/blog",
            label: "Blogs",
            active: path === "/blog"
        },
        {
            href: "/contact",
            label: "Contact",
            active: path === "/contact"
        },
        {
            href: "/our-work",
            label: "Our Work",
            active: path === "/our-work"
        },
    ]
    return (
        <>
            {routes.map((route) => <Link href={route.href} key={route.href} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border', route.active ? 'scale-110 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>{route.label}</Link>)}
        </>
    )
}
