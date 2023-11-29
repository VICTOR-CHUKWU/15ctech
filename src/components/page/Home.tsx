'use client'
import React from 'react'
import { Header, FeaturedProjects, Services, Steps, Testimonial } from '../home'
import useScrollReveal from '@/utils/useScrollReveal'

const HomePage = () => {
    const [homeRef] = useScrollReveal()
    return (
        <main ref={homeRef}>
            <Header />
            <FeaturedProjects />
            <Services />
            <Steps />
            <Testimonial />
        </main>
    )
}

export default HomePage