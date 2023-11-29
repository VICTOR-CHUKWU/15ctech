import React, { useCallback } from 'react'
import { Container, SVGIcon } from '../shared'
import { IService } from '@/types'
import { services } from '@/data'

const Services = () => {
    const renderServices = useCallback(
        (item: IService) => {
            return (
                <Container className=' w-[22%] shrink-0 flex flex-col items-center'>
                    <Container as='span' className=' rounded-full mb-2 w-16 h-16 flex items-center justify-center text-white bg-red-gradient-tb'>
                        <SVGIcon name={item.icon} size='small' />
                    </Container>
                    <Container as='h5' className=' font-semibold text-center'>{item.name}</Container>
                    <Container as='p' className=' text-center font-light text-xs'>{item.description}</Container>
                </Container>
            )
        },
        [],
    )

    return (
        <Container className=' mt-20 mb-10'>
            <Container className=' container pt-20'>
                <Container className='circle-intersect-a border-staggered'>
                    <Container as='h4' className=' font-bold text-2xl '>Our Services</Container>
                </Container>

                <Container className=' mt-20 flex items-center justify-between flex-wrap'>
                    {
                        services.map(renderServices)
                    }
                </Container>
            </Container>
        </Container>
    )
}

export default Services