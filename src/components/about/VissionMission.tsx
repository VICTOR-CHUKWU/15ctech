import React from "react";
import Image from "next/image";
import { Container, AnimateScrollReveal } from "../shared";

const VisionMission = () => {
    return (
        <Container className=" bg-slate-50 py-3">
            <AnimateScrollReveal
                duration={1.2}
                className=" container grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 mt-3 mb-4 items-center"
            >
                <Container>
                    <AnimateScrollReveal
                        duration={1.5}
                        delay={0.1}
                        animName="fadeInRight"
                        className=" flex flex-col items-center px-8 py-10 folded-paper"
                    >
                        <Container
                            as="h4"
                            className="capitalize text-gradient font-semibold text-3xl text-center mb-4"
                        >
                            Our Vision
                        </Container>
                        <Container as="p" className=" text-center font-medium text-slate-600">
                            Empowering success through innovative digital solutions, 15C Tech Ltd envisions a world where businesses thrive in the digital era, driven by creativity, technology, and sustainable growth.
                        </Container>
                        <Container className="w-full relative mt-7 h-[15rem] rounded-md">
                            <Image
                                src='/img/testimonials/julian.webp'
                                alt='waho-we-are'
                                layout="fill"
                                className=' rounded-md object-cover object-center'
                            />
                        </Container>
                    </AnimateScrollReveal>
                </Container>
                <Container className=" pt-[6rem]">
                    <AnimateScrollReveal
                        duration={1.5}
                        delay={0.1}
                        animName="fadeInLeft"
                        className=" flex flex-col items-center px-8 py-10 folded-paper-mission"
                    >
                        <Container
                            as="h4"
                            className="capitalize text-gradient font-semibold text-3xl text-center mb-4"
                        >
                            Our Mission
                        </Container>
                        <Container as="p" className=" text-center font-medium text-slate-600">
                            At 15C Tech Ltd, our mission is to deliver cutting-edge digital services, fueling our clients growth. With a commitment to excellence, integrity, and client success, we transform ideas into impactful solutions, shaping a future where businesses reach new heights in the digital landscape.
                        </Container>
                        <Container className="w-full relative mt-7 h-[15rem] rounded-md">
                            <Image
                                src='/img/testimonials/julian.webp'
                                alt='waho-we-are'
                                fill
                                className=' rounded-md'
                                style={{ objectFit: "cover" }}
                            />
                        </Container>
                    </AnimateScrollReveal>
                </Container>
            </AnimateScrollReveal>
        </Container>
    );
};

export default VisionMission;
