
import Link from 'next/link';
import {useEffect, useState} from 'react';
import data from '../../lib/data';


export default function Navigation({ children, page }) {

    const [isSticky, setSticky] = useState(false)
    const amount = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    const handleScroll = () => {
        setSticky(window.scrollY >= amount)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);



    return (
        <>
            <header className={`fixed w-full top-0 z-50 flex  transition-colors duration-1000 justify-between px-16 py-5 ${isSticky ? 'bg-black !text-white' : ''}`}>
                <Link href="/">
                    <h1 className='text-3xl font-bold'>LOGO</h1>
                </Link>
                <nav className='my-auto'>    
                    <ul className='flex gap-4'>
                        {data.navigation.items.map((link, i) => (
                            <li className={`nav-link   ${(page?.slug === 'index' ? 'home' : page?.slug?.toLowerCase()) === link.text.toLowerCase() ? 'underline underline-offset-4' : ''}`} key={i}>
                                <Link href={`${link.link}`}>
                                    {/* className={`nav-link ${(page?.slug === 'index' ? 'home' : page?.slug?.toLowerCase()) === link.text.toLowerCase() ? 'active' : ''}`} */}
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link className='px-4 py-2 bg-white text-black rounded-lg' href={`${data.navigation.button.link}`}>
                                {data.navigation.button.text}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );
}
