"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NavBarMobile() {

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
            href: "/our-portfolio",
            label: "Our Portfolio",
            active: path === "/our-portfolio"
        },
    ]
    return (
        <Sheet>
            <SheetTrigger asChild >
                <AlignRight className="text-white h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="bg-secondaryColor z-[999] ">
                <div className="flex flex-col gap-10 pl-4">
                    {routes.map((route) => <SheetClose key={route.href} asChild><Link href={route.href} className={cn('relative w-fit text-textColor hover:text-white hover:scale-110 font-normal transition-all duration-300 animated-border scale-125', route.active ? 'scale-150 text-white after:content-[""] after:bg-white after:h-[3px] after:w-full after:absolute after:left-0 after:-bottom[5px]' : '')}>{route.label}</Link></SheetClose>)}
                </div>
            </SheetContent>
        </Sheet>
    )
}
