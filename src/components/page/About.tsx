'use client'
import React from 'react'
import AppHeader from '../AppHeader'
import useScrollReveal from '@/utils/useScrollReveal'
import { VisionMission, WhoWeAre } from '../about'

const AboutPage = () => {
    const [aboutRef] = useScrollReveal()
    return (
        <main ref={aboutRef} className=' min-h-screen'>
            <AppHeader head='Our Story: Innovating for Success' text={`At 15C Tech Ltd, we are more than just a team; we are a collective of passionate experts dedicated to transforming ideas into reality. Learn about our journey, values, and commitment to delivering excellence in every project.`} />
            <WhoWeAre />
            <VisionMission />
        </main>
    )
}

export default AboutPage