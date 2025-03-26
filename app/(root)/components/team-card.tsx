import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface TeamCardProps {
    image: string
    position: string
    expertise: string
}

export default function TeamCard({image, position, expertise}: TeamCardProps) {
    return (
        <div className='bg-secondaryBGColor rounded-xl flex items-center relative col-span-3 lg:col-span-2 z-0 h-52'>
            <div className='w-2/5 h-full bg-white rounded-l-xl relative'><Image src={`/assets/images/${image}`} alt={position} fill className='object-cover object-top rounded-l-xl' /></div>
            <div className='p-4 w-3/5'>
                <h2 className='text-white text-xl font-semibold flex flex-col gap-2'>
                    {position}
                    <span className='text-sm text-[#8e8e8e] font-normal'>{expertise}</span>
                </h2>
            </div>
        </div>
    )
}
