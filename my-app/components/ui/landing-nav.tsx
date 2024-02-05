import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  {Separator}  from './separator';
import { Button } from './button';
const LandingNav = () => {
    return (
        <header className='w-screen bg-transparent m-0'>
            <div className="flex justify-between items-center w-full px-4 py-2">
                <div>
                    <Link href='/'>        
                        <Image src="/images/output-onlinepngtools.png" alt="Dynamic Solutions" width={160} height={60} />    
                    </Link>
                </div>
                <nav className="flex justify-end flex-grow">
                    <ul className="flex flex-row list-none space-x-4 justify-center items-center mr-8">  
                        <li>
                            <Link href='/sign-up'><Button className='text-lg bg-gradient-to-r from-violet-600 to-indigo-600'>Sign Up</Button></Link>
                        </li>
                        <li className='text-lg font-bold'>
                            <Link href='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default LandingNav;
