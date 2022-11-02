import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HomeIcon, SearchIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { BeakerIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div className='flex bg-white px-4 py-2 sticky top-0 z-50'>
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
            <div className='mx-7 flex items-center xl:min-w-[300px]'>
                <HomeIcon className='h-5 w-5' />
                <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>

            {/* Searchbox */}
            <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input
                    type='text'
                    placeholder='Search Reddit'
                    className='flex-1 bg-transparent outline-none'
                />
                <button type='submit' hidden />
            </form>
        </div>
    );
}

export default Header;
