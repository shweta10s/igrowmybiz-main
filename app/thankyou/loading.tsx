import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <main className=' h-screen w-full flex items-center] justify-center bg-black'>
      <div className='w-32 h-32 relative mx-auto my-auto'>
        <Image
          src={'/assets/images/new logo-a4aa82bd.png'}
          alt='Igrowmybiz.com'
          fill
          className='animate-pulse object-contain'
        />
      </div>
    </main>
  )
}
