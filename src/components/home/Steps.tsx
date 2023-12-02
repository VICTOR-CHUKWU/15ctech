import React, { useCallback } from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import S from '@/style/page/home.module.scss'
import { steps } from '@/data'

const Steps = () => {
    const renderSteps = useCallback(
        (item: { text: string }, i: number) => {
            return (
                <AnimateScrollReveal as='p' duration={i * 1.25} delay={i * 0.11} key={i} className={` ${S.stepText}`}>{item.text}</AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container className={`mt-0 md:mt-10 lg:mt-28 mb-2 md:mb-16 ${S.steps}`}>
            <AnimateScrollReveal className=' container relative z-[2] pt-0 md:pt-10 lg:pt-28 grid place-items-center grid-cols-1 md:grid-cols-2 gap-10'>
                <Container className={`w-full ${S.stepImgCont}`}>
                    <AnimateScrollReveal duration={1.65} animName='fadeInRight' allowOverflow className=' relative z-[3] w-full h-[20rem] lg:h-[25rem] xl:h-[26rem]'>
                        <Image src='/img/why-us.png' alt='image computer' layout='fill' objectFit='contain' className='' />
                    </AnimateScrollReveal>
                </Container>
                <Container className=' mt-10 md:mt-0 flex flex-col gap-10'>
                    <Container as='h3' className=' font-bold text-center md:text-left text-2xl'>Our Processes</Container>

                    <AnimateScrollReveal duration={1.4} animName='fadeInLeft' className=' flex flex-col gap-10'>
                        {
                            steps.map(renderSteps)
                        }
                    </AnimateScrollReveal>
                </Container>
            </AnimateScrollReveal>

        </Container>
    )
}

export default Steps