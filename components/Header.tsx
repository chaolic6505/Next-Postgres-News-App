import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div>
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
                <Link href='/'>
                    <img
                        src='/images/logo/header_logo.svg'
                        className='w-44 cursor-pointer object-contain'
                    />
                </Link>
            </div>
        </div>
    );
}

export default Header;
