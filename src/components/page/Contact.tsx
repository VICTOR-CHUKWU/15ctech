'use client'
import useScrollReveal from '@/utils/useScrollReveal'
import React from 'react'
import AppHeader from '../AppHeader'
import { ContactForm, Location } from '../contact'

const ContactPage = () => {
    const [contactRef] = useScrollReveal()
    return (
        <main ref={contactRef} className=' min-h-screen'>
            <AppHeader head='Get In Touch With Us' text='For enquiries or support, please send us a message using the form below, and you will be contacted by one of our representatives.' />
            <Location />
            <ContactForm />
        </main>
    )
}

export default ContactPage