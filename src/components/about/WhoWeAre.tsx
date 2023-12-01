import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'

const WhoWeAre = () => {
    return (
        <Container>
            <AnimateScrollReveal duration={1.2} className=' container grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 mt-14 mb-10 items-center'>
                <AnimateScrollReveal duration={1.5} animName='fadeInRight' delay={0.1} className=' col-span-1 md:col-span-2'>
                    <Container as='h2' className=' capitalize text-gradient font-semibold text-3xl'>Who we are</Container>
                    <Container as='p' className=' mt-4'>
                        At 15C Tech Ltd, we&quot;re a dedicated team crafting digital solutions for success. Specializing in website development, mobile apps, digital marketing, and product management, we blend innovation with expertise to empower businesses through technology.
                    </Container>
                    <Container as="p" className="my-3">
                        With a shared vision driving our journey, we&quot;re more than a team — we&quot;re a collective of passionate professionals committed to excellence. Our approach is creative, our strategies are strategic, and our results are transformative.
                    </Container>
                    <Container as="p">
                        Discover the heart of our story at 15C Tech Ltd. We&quot;re not just building websites; we&quot;re building futures, one digital solution at a time.
                    </Container>
                </AnimateScrollReveal>
                <AnimateScrollReveal duration={1.5} animName='fadeInLeft' delay={0.113} className=' w-full relative h-[20rem] rounded-md'>
                    <Image
                        src='/img/testimonials/chidi.webp'
                        alt='waho-we-are'
                        fill
                        className=' rounded-md'
                        style={{ objectFit: "cover" }}
                    />
                </AnimateScrollReveal>
            </AnimateScrollReveal>
        </Container>
    )
}

export default WhoWeAre