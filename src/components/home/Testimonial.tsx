'use client'
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image';
import { Container } from '../shared'
import { TESTIMONIALS } from '@/data';

const Testimonial = () => {
    const [index, setIndex] = React.useState(0);
    const renderImages = useCallback(
        (
            item: { img: string; name: string; message: string; id: number },
            itemIndex: number
        ) => {
            let position = "nextSlide";
            if (itemIndex === index) {
                position = "activeSlide";
            }
            if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === TESTIMONIALS.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <Container
                    className={`Project ${position} grid grid-cols-1 md:grid-cols-2 items-center gap-6`}
                    key={itemIndex}
                >
                    <Container className="relative w-full bg-red-100 h-[10rem] md:h-full">
                        <Image
                            src={item.img}
                            alt="Your Image"
                            className=""
                            fill
                            style={{ objectFit: "cover" }}
                            priority={true}
                        />
                    </Container>
                    <Container>
                        <Container as="p" className=" quote mx-5 text-left text-xs md:text-sm lg:text-base text-default-blue font-medium">{item.message}</Container>
                        <Container as="p" className=" mt-5 text-center text-2xl text-theme-red font-semibold">{item.name}</Container>
                    </Container>
                </Container>
            );
        },
        [index]
    );
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                const result = (oldIndex + 1) % TESTIMONIALS.length;
                return result;
            });
        }, 10000);
        return () => {
            clearInterval(slider);
        };
    }, []);
    return (
        <Container className='mt-0 md:mt-20 before-after'>
            <Container className=' container relative z-[2] pt-20'>
                <Container className='circle-intersect-a border-staggered'>
                    <Container as='h4' className=' font-bold text-lg md:text-2xl '>Testimonial</Container>
                </Container>
                <Container className={`container overflow-visible md:overflow-hidden px-3 md:px-0 relative z-[2] min-h-[27rem] md:min-h-[22rem] mt-10 md:mt-28 mb-20 `}>
                    {TESTIMONIALS.map(renderImages)}
                </Container>
            </Container>
        </Container>
    )
}

export default Testimonial