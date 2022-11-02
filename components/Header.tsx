import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
    HomeIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { BeakerIcon } from '@heroicons/react/24/outline';

function Header() {
    return (
        <div className='flex bg-white px-4 py-2'>
            <div className='relative h-10 w-20'>
                <Link href='/'>
                    <Image
                        alt='logo'
                        fill={true}
                        src='/reddit-logo.png'
                        className='w-90 cursor-pointer object-contain'
                    />
                </Link>
            </div>

            <div className='mx-7 flex items-center'>
                <HomeIcon className='h-5 w-5'/>
                <p>Home</p>
                <ChevronRightIcon className='h-5 w-5'/>
            </div>
        </div>
    );
}

export default Header;
