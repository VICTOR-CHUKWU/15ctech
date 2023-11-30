'use client'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'
import AppHeader from '../AppHeader'
import { Service } from '../services'
import { Steps } from '../home'

const ServicesPage = () => {
    const [serviceRef] = useScrollReveal()
    return (
        <main ref={serviceRef} className=' min-h-screen'>
            <AppHeader head='Empowering Your Digital Presence' text='Elevate your business with our comprehensive suite of services – from cutting-edge website development and mobile app solutions to strategic digital marketing and efficient product management.' />
            <Service />
            <Steps />
        </main>
    )
}

export default ServicesPage