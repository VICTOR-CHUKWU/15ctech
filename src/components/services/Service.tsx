import { IService } from '@/types'
import React, { useCallback } from 'react'
import { AnimateScrollReveal, Container, SVGIcon } from '../shared'
import { services } from '@/data'

const Service = () => {
    const renderServices = useCallback(
        (item: IService, i: number) => {
            return (
                <AnimateScrollReveal duration={i * 1.12} delay={i * 0.12} key={i} className={`w-full hover:shadow-lg flex flex-col gap-4 items-center bg-slate-50 pb-5 shadow-md rounded-md`}>
                    <Container as='span' className=' rounded-full mb-2 w-16 h-16 flex items-center justify-center bg-red-gradient-tb text-white'>
                        <SVGIcon name={item.icon} size='small' />
                    </Container>
                    <Container as='h5' className=' font-semibold text-sm md:text-base text-center'>{item.name}</Container>
                    <Container as='p' className=' text-center font-light text-sm text-slate-700'>{item.description}</Container>
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <Container className=' pt-20'>
            <Container className=' container'>
                <Container className='circle-intersect-a border-staggered'>
                    <Container as='h4' className=' font-bold text-lg md:text-2xl '>Our Services</Container>
                </Container>
                <Container className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>
                    {
                        services.map(renderServices)
                    }
                </Container>
            </Container>
        </Container>
    )
}

export default Service