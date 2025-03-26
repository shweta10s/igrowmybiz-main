import Image from 'next/image'
import React from 'react'

export default function loading() {
    return (
        <main className=' h-screen w-full flex items-center] justify-center bg-black'>
            <div className='w-32 h-32 relative mx-auto my-auto'>
                <div className="loading-bar">Loading</div>
            </div>
        </main>
    )
}
