'use client'
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./shared";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { navMenuItems } from "@/data";

const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [scrolledDown, setScrolledDown] = useState(false);
    const [scrolledUp, setScrolledUp] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderNavItems = useCallback((el: string) => {
        const [name, url] = el.split("|");
        return (
            <Link
                key={url}
                href={url}
                className={`nav-menu-item pb-1 ${pathname !== "/" && url !== "/" && pathname.includes(url)
                    ? "active"
                    : ""
                    }`}
            >
                {name}
            </Link>
        );
    }, []);
    let lastScrollY = 0;

    const handleScroll: EventListener = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY == 0) {
            setScrolledDown(false)
            setScrolledUp(false)
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down
            setScrolledDown(true)
            setScrolledUp(false)
        } else {
            // Scrolling up
            setScrolledDown(false)
            setScrolledUp(true)
        }

        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container className={` fixed w-full py-2 z-50 Nav ${scrolledDown ? " hide" : scrolledUp ? 'bg-theme-red-opac-8 text-white' : "bg-transparent"}`}>
            <Container
                as="nav"
                className={`container flex items-center justify-between relative `}
            >
                {/* <Container as="span" className=" relative"> */}
                <Link href='/' className=" relative">
                    <Image
                        src="/img/15C_tech_logo.jpg"
                        alt="logo"
                        width={100}
                        height={0}
                    />
                </Link>
                {/* </Container> */}
                <Container as="span" className="hidden md:flex items-center gap-6">
                    {navMenuItems.map(renderNavItems)}
                </Container>
                <Container as="span" className="hidden md:flex items-center">
                    <a href="tel:+2347032880693" className=" button font-semibold">
                        <PhoneIcon className="pointer-events-none text-white w-5 h-5  mr-1" />
                        Contact us</a>
                </Container>
            </Container>
        </Container>
    );
};

export default Nav;
