import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import S from '@/style/page/home.module.scss'

const Steps = () => {
    return (
        <Container className={`mt-20 mb-16 ${S.steps}`}>
            <Container className=' container relative z-[2] pt-20 grid place-items-center grid-cols-1 md:grid-cols-2 gap-6'>
                <Container className={`w-full ${S.stepImgCont}`}>
                    <Container className=' relative w-[24rem] h-[27rem] overflow-hidden rounded-2xl'>
                        <Image src='/img/header.jpg' alt='image computer' layout='fill' objectFit='cover' />
                    </Container>
                </Container>
                <Container>
                    <Container as='h3'>Our Processes</Container>
                </Container>
            </Container>

        </Container>
    )
}

export default Steps