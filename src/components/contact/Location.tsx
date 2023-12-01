import React from 'react'
import { Container } from '../shared'
import { HomeIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

const Location = () => {
    return (
        <Container>
            <Container className='container'>
                <Container className=' bg-slate-50 w-full md:w-2/3 lg:w-[55%] mx-auto rounded-md px-9 py-12'>
                    <Container className=' flex items-center gap-8 mb-7'>
                        <Container as='span' className=" flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-blue-200">
                            <HomeIcon className="pointer-events-none text-slate-600 w-5 h-5" /></Container>
                        <Container>
                            <Container as='h4' className=' text-slate-800 font-semibold text-lg md:text-2xl'>Location:</Container>
                            <Container as='p' className=' text-sm md:text-base text-theme-blue'>No 14, Oba Ovoranwen Street, Gwarimpa Estate, Abuja, Nigeria.</Container>
                        </Container>
                    </Container>
                    <Container className=' flex items-center gap-8 mb-7'>
                        <Container as='span' className=" flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-blue-200">
                            <EnvelopeIcon className="pointer-events-none text-slate-600 w-5 h-5" /></Container>
                        <Container>
                            <Container as='h4' className=' text-slate-800 font-semibold text-lg md:text-2xl'>Email:</Container>
                            <Container as='p' className='text-sm md:text-base text-theme-blue'>info@15ctech.com</Container>
                        </Container>
                    </Container>
                    <Container className=' flex items-center gap-8 mb-7'>
                        <Container as='span' className=" flex items-center justify-center w-8 h-8 rounded-full bg-blue-200">
                            <DevicePhoneMobileIcon className="pointer-events-none text-slate-600 w-5 h-5" /></Container>
                        <Container>
                            <Container as='h4' className=' text-slate-800 font-semibold text-lg md:text-2xl'>Call:</Container>
                            <Container as='p' className='text-sm md:text-base text-theme-blue'>+234 80 3619 0155</Container>
                        </Container>
                    </Container>
                </Container>

            </Container>
        </Container>
    )
}

export default Location