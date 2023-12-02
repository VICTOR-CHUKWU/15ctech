import React from 'react'
import Image from 'next/image'
import { Container, SVGIcon } from './shared'
import Link from 'next/link'


const Footer = () => {
    return (
        <Container className='bg-theme-blue py-8'>
            <Container className=' container'>
                <Container className=' flex justify-between flex-wrap gap-3 border-b-[1px] border-white pb-3'>
                    <Container className=' w-[58%] md:w-[30%] text-white shrink-0 flex flex-col gap-5'>
                        <Link href='/' className=" relative">
                            <Image
                                src="/img/15C_tech_logo.jpg"
                                alt="logo"
                                width={100}
                                height={0}
                            />
                        </Link>
                        <Container as='p' className=' text-sm italic '>We take care of your tech products from start to finish</Container>
                        <Container className=' flex items-center gap-6'>
                            <Link href='/' className=" relative cursor-pointer" >
                                <SVGIcon name='face-book' size='tiny' className=' text-white' />
                            </Link>
                            <Link href='/' className=" relative cursor-pointer">
                                <SVGIcon name='instagram' size='tiny' className=' text-white' />
                            </Link>
                        </Container>
                    </Container>

                    <Container className=' w-[38%] md:w-[20%] text-white shrink-0'>

                        <Container as='h4' className=' text-lg mb-5'>Links</Container>
                        <Container className=' flex flex-col gap-3 '>
                            <Link href='/about' className=" relative text-sm italic">About</Link>
                            <Link href='/services' className=" relative text-sm italic">Services</Link>
                            <Link href='/contact' className=" relative text-sm italic">Contact</Link>
                        </Container>
                    </Container>

                    <Container className=' w-[48%] md:w-[20%] text-white shrink-0'>

                        <Container as='h4' className=' text-lg mb-5'>Services</Container>
                        <Container className=' flex flex-col gap-3 '>
                            <Container as='span' className=" relative text-sm italic">Web development</Container>
                            <Container as='span' className=" relative text-sm italic">Mobile App development</Container>
                            <Container as='span' className=" relative text-sm italic">Digital marketing</Container>
                            <Container as='span' className=" relative text-sm italic">Product management</Container>
                        </Container>
                    </Container>
                    <Container className=' w-[48%] md:w-[20%] text-white shrink-0'>

                        <Container as='h4' className=' text-lg mb-5'>Contact</Container>
                        <Container className=' flex flex-col gap-3 '>
                            <Container as='span' className=" relative text-sm italic">call - +234 80 3619 0155</Container>
                            <Container as='span' className=" relative text-sm italic">No 14, Oba Ovoranwen Street, Gwarimpa Estate, Abuja, Nigeria</Container>
                        </Container>
                    </Container>

                </Container>
                <Container className="text-sm text-white text-center pt-6">
                    Copyright &copy; {new Date().getFullYear()} by <Container as='strong'>15C Tech Ltd</Container>. All Rights Reserved.
                </Container>
            </Container>
        </Container>
    )
}

export default Footer