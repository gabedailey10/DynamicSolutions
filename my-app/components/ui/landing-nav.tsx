import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';

const LandingNav = () => {
    const isNotPhone = window.innerWidth >= 768;

    return (
        <header className='w-screen bg-transparent m-0'>
            <div className="flex justify-between items-center w-full px-4 py-2">
                <div className='ml-12 md:ml-0'>
                    <Link href='/'>        
                        <Image src="/images/output-onlinepngtools.png" alt="Dynamic Solutions" width={160} height={60} />    
                    </Link>
                </div>
                {isNotPhone && (
                    <nav className="flex justify-end flex-grow">
                        <ul className="flex flex-row list-none md:space-x-4 justify-center items-center md:mr-8">  
                            <li>
                                <a href='/api/auth/login'><Button className='text-xs w-3/4 md:w-1/1 md:text-lg bg-gradient-to-r from-violet-600 to-indigo-600'>Sign Up</Button></a>
                            </li>
                            <li className=' text-sm md:text-lg font-bold'>
                                <a href='/api/auth/login'>Login</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default LandingNav;
