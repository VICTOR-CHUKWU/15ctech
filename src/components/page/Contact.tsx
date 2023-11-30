'use client'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'
import AppHeader from '../AppHeader'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    return (
        <main ref={contactRef} className=' min-h-screen'>
            <AppHeader head='Get In Touch With Us' text='We are here to take your request' />
        </main>
    )
}

export default ContactPage