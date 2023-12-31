import React, { useCallback } from 'react'
import { AnimateScrollReveal, Container, SVGIcon } from '../shared'
import { IService } from '@/types'
import { subServices } from '@/data'
import S from '@/style/page/home.module.scss'

const Services = () => {
    const renderServices = useCallback(
        (item: IService, i: number) => {
            return (
                <AnimateScrollReveal duration={i * 1.12} delay={i * 0.12} key={i} className={` w-[48%] md:w-[22%] shrink-0 flex flex-col items-center ${S.Service}`}>
                    <Container as='span' className=' rounded-full mb-2 w-16 h-16 flex items-center justify-center text-white'>
                        <SVGIcon name={item.icon} size='small' />
                    </Container>
                    <Container as='h5' className=' font-semibold text-sm md:text-base text-center'>{item.name}</Container>
                    <Container as='p' className=' text-center font-light text-xs'>{item.description}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )

    return (
        <Container className=' mt-20 mb-20'>
            <Container className=' container pt-20'>
                <Container className='circle-intersect-a border-staggered'>
                    <Container as='h4' className=' font-bold text-lg md:text-2xl '>Our Services</Container>
                </Container>

                <AnimateScrollReveal className=' mt-16 md:mt-20 flex items-center justify-between gap-2 flex-wrap'>
                    {
                        subServices.map(renderServices)
                    }
                </AnimateScrollReveal>
            </Container>
        </Container>
    )
}

export default Services