import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import S from '@/style/page/home.module.scss'

const Header = () => {
    return (
        <Container className={`pt-[10rem] ${S.header}`}>
            <Container className="container relative z-[1] flex justify-between">
                <Container className=' w-1/2 pt-10'>
                    <Container as='h1' className=' text-5xl xl:text-6xl font-extrabold mb-8'>
                        Better Solutions For Your Business
                    </Container>
                    <Container as='p' className=' text-sm mb-2'>Our software and IT solutions are built to suite your specific business needs.</Container>
                    <Container as='p' className=' text-sm mb-2'>With business intelligence reports and real time business data, our clients can make informed business decisions for improved performance.</Container>
                    <Container className=' mt-10 flex items-center gap-4'>
                        <button className=' button'>Get Started</button>
                        <Container className=' flex flex-col gap-0'>
                            <Container as='h5' className=' text-lg font-semibold'>20k+</Container>
                            <Container as='p' className=' text-xs'>Happy clients</Container>
                        </Container>
                        <Container className=' flex flex-col gap-0'>
                            <Container as='h5' className=' text-lg font-semibold'>100+</Container>
                            <Container as='p' className=' text-xs'>Completed projects</Container>
                        </Container>
                    </Container>
                </Container>
                <Container className=' '>
                    <Container className='w-[23rem] h-[23rem] xl:w-[25rem] xl:h-[25rem] border-[1px] border-slate-500 border-dashed rounded-full relative'>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-20 h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute top-10 left-0'>Web Dev</Container>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-20 h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute -top-7 left-40'>Mobile App</Container>
                        <Container as='span' className='text-theme-primary-v1 text-xs italic w-20 h-20 border-[1px] border-dashed border-slate-500 flex justify-center items-center bg-white rounded-full absolute top-52 -left-5'>Product Mgt</Container>
                        <Container as='span' className='w-[18rem] h-[17rem] xl:w-[20rem] xl:h-[19rem] animate-fading-pulse overflow-hidden absolute rounded-xl z-[2] -bottom-3 -right-5'>
                            <Image src='/img/header.jpg' alt='image computer' layout='fill' objectFit='cover' />
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Header