import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import S from '@/style/page/home.module.scss'

const Header = () => {
    return (
        <Container className={`pt-[5rem] md:pt-[10rem] ${S.header}`}>
            <Container className="container relative z-[1] flex justify-between flex-wrap">
                <AnimateScrollReveal duration={1.2} className=' w-full md:w-1/2 shrink-0 pt-0 lg:pt-10'>
                    <AnimateScrollReveal duration={1.75} delay={0.12} animName='fadeInRight' as='h1' className='text-3xl md:text-5xl xl:text-6xl font-extrabold mb-2 md:mb-8'>
                        Better Solutions For Your Business
                    </AnimateScrollReveal>
                    <AnimateScrollReveal duration={1.65} delay={0.12} animName='fadeInLeft' as='p' className=' text-sm mb-2'>Our software and IT solutions are built to suite your specific business needs.</AnimateScrollReveal>
                    <AnimateScrollReveal duration={1.65} delay={0.12} animName='fadeInLeft' as='p' className=' text-sm mb-2'>With business intelligence reports and real time business data, our clients can make informed business decisions for improved performance.</AnimateScrollReveal>
                    <AnimateScrollReveal allowOverflow duration={1.65} delay={0.123} className=' mt-10 flex items-center gap-2 md:gap-4'>
                        <button className=' button w-44 h-16'>Get Started</button>
                        {/* <Container className=' flex flex-col gap-0'>
                            <Container as='h5' className=' text-base md:text-lg font-semibold'>20k+</Container>
                            <Container as='p' className=' text-xs'>Happy clients</Container>
                        </Container>
                        <Container className=' flex flex-col gap-0'>
                            <Container as='h5' className=' text-base md:text-lg font-semibold'>100+</Container>
                            <Container as='p' className=' text-xs'>Completed projects</Container>
                        </Container> */}
                    </AnimateScrollReveal>
                </AnimateScrollReveal>
                <Container className=' mt-10 w-full md:w-1/2 shrink-0 flex justify-center md:justify-end pl-0 md:pl-3 md:mt-0 '>
                    <AnimateScrollReveal duration={1.45} delay={0.12} animName='fadeInLeft' allowOverflow className='w-[15rem] h-[15rem] md:w-[21rem] md:h-[21rem] lg:w-[23rem] lg:h-[23rem] xl:w-[25rem] xl:h-[25rem] border-[1px] border-slate-500 border-dashed rounded-full relative'>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-14 h-14 md:w-20 md:h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute top-2 md:top-10 left-2 md:left-0 text-center'>Web Dev</Container>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-14 h-14 md:w-20 md:h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute top-0 md:-top-7 left-40 text-center'>Mobile App</Container>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-14 h-14 md:w-20 md:h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute top-32 -left-3 md:top-52 md:-left-5 text-center'>Product Mgt</Container>
                        <AnimateScrollReveal duration={1.67} delay={0.13} as='span' className='w-[12rem] h-[10rem] md:w-[16rem] md:h-[15rem] lg:w-[18rem] lg:h-[17rem] xl:w-[20rem] xl:h-[19rem] overflow-hidden absolute rounded-xl z-[2] -bottom-3 -right-1 lg:-right-5'>
                            <Image src='/img/sentinel.png' alt='image computer' layout='fill' objectFit='cover' className='animate-fading-pulse' />
                        </AnimateScrollReveal>
                    </AnimateScrollReveal>
                </Container>
            </Container>
        </Container>
    )
}

export default Header