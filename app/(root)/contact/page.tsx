import React from 'react'
import TypeFormComponent from '../components/type-form'
import { Metadata } from 'next'
export default function Page() {
  return (
    <main className='bg-secondaryColor min-h-[95vh] md:min-h-screen w-full flex items-center justify-center'>
      <TypeFormComponent/>
    </main>
  )
}
