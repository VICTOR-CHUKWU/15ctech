import React from 'react'
import { Container } from './shared'

const Footer = () => {
    return (
        <Container className='bg-theme-blue py-8'>
            <Container className=' container'>
                <Container className="text-sm text-white text-center">
                    Copyright &copy; {new Date().getFullYear()} by <Container as='strong'>15C Tech Ltd</Container>. All Rights Reserved.
                </Container>
            </Container>
        </Container>
    )
}

export default Footer