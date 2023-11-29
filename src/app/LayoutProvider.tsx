'use client'
import { usePathname } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            {!pathname.includes('dashboard') && <Nav />}
            {children}
            {!pathname.includes('dashboard') && <Footer />}
        </>
    )
};