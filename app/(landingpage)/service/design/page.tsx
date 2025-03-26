/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './development.css'
import SectionFive from './components/section-five'
import DevelopmentSectionOne from './components/development-section-one'
import DevelopmentSectionTwo from './components/development-section-two'
import DevelopmentSectionThree from './components/development-section-three'
import DevelopmentSectionFour from './components/development-section-four'
import DevelopmentSectionSix from './components/development-section-six'
import DevelopmentSectionSeven from './components/development-section-seven'
import DevelopmentSectionEight from './components/development-section-eight'
import DevNavBar from './components/service-nav-bar'


export default function Page() {
    return (
        <>
            <header>
                <DevNavBar/>
            </header>
            <main className=''>
                <DevelopmentSectionOne />
                {/* section two  */}
                <DevelopmentSectionTwo />
                {/* section three  */}
                <DevelopmentSectionThree />
                {/* section four  */}
                <DevelopmentSectionFour />
                {/* section five  */}
                <div id="plans">
                    <SectionFive />
                </div>
                {/* section six  */}
                <DevelopmentSectionSix />
                {/* section seven  */}
                <DevelopmentSectionSeven />
                {/* section eight  */}
                <DevelopmentSectionEight />
            </main>
            <footer className='bg-black h-10 w-full flex items-center justify-center'>
                <p className='text-gray-400 text-center'>&copy; {new Date().getFullYear()} igrowmybiz.com. All rights reserved.</p>
            </footer>
        </>
    )
}