'use client'
import React, { useCallback, useRef } from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import { featuredProjects } from '@/data'
import { IFeatureProject } from '@/types'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const FeaturedProjects = () => {
    const [index, setIndex] = React.useState(0);
    const intervalIdRef = useRef<any | undefined>(undefined);

    const increaseCurrentIndex = () => {
        clearInterval(intervalIdRef.current);
        setIndex((prev) => {
            if (prev === featuredProjects.length - 1) return 0;
            return prev + 1;
        });
    };

    const decreaseCurrentIndex = () => {
        clearInterval(intervalIdRef.current);
        setIndex((prev) => {
            if (prev === 0) return featuredProjects.length - 1;
            return prev - 1;
        });
    };
    const renderProjects = useCallback(
        (item: IFeatureProject, itemIndex: number) => {
            let position = "nextSlide";
            if (itemIndex === index) {
                position = "activeSlide";
            }
            if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === featuredProjects.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <Container
                    className={`Project ${position} w-full h-full grid grid-cols-1 md:grid-cols-3`}
                    key={itemIndex}
                >
                    <Container className=' bg-white h-[15rem] relative col-span-1 md:col-span-2 md:h-[20rem]'>
                        <Container className=' rounded-none md:rounded-md h-full w-full'>
                            <Image
                                src={item.img}
                                alt="Your Image"
                                className=" rounded-t-md rounded-b-none md:rounded-md"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </Container>
                    </Container>
                    <Container className=' relative w-full mt-0'>
                        <Container className=' absolute w-full md:w-[140%] h-[15rem] -top-full md:top-1/3 left-0 md:-left-[40%] bg-theme-blue-opac-8 text-white rounded-t-none rounded-b-md md:rounded-md z-[3] px-5 py-10'>
                            <Container as='h3' className=' font-semibold mb-2 text-center md:mb-5 text-xl md:text-2xl'>{item.name}</Container>
                            <Container as='p' className=' font-medium text-sm mb-2 md:mb-5 text-center'>{item.description}</Container>
                        </Container>
                    </Container>

                </Container>
            );
        },
        [index]
    );



    return (
        <Container className={`mb-10 mt-20`}>
            <Container className=' container pt-16'>
                <Container className='circle-intersect-a border-staggered'>
                    <Container as='h4' className=' font-bold text-lg md:text-2xl '>Featured Projects</Container>
                </Container>
                <Container className='h-[32rem] md:h-[30rem] mt-12 md:mt-20 relative'>
                    {
                        featuredProjects.map(renderProjects)
                    }
                    <button onClick={() => decreaseCurrentIndex()} className=" outline-none bg-theme-blue-opac-8 text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 top-full left-[30%] md:left-[40%] xl:left-[45%] ">
                        <ArrowLeftIcon className="pointer-events-none text-white w-7 h-7  mr-1" />
                    </button>
                    <button onClick={() => increaseCurrentIndex()} className=" outline-none bg-theme-blue-opac-8 text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 top-full right-[30%] md:right-[40%] xl:right-[45%] ">
                        <ArrowRightIcon className="pointer-events-none text-white w-7 h-7  mr-1" />
                    </button>
                </Container>
            </Container>
        </Container>
    )
}

export default FeaturedProjects