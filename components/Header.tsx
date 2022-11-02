import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <div>
            <div className='relative h-10 w-200 flex-shrink-0 cursor-pointer'>
                <Link href='/'>
                    <Image
                        alt='logo'
                        width={200}
                        height={100}
                        src="/reddit-logo.png"
                        className='w-90 cursor-pointer object-contain'
                    />
                </Link>
            </div>
        </div>
    );
}

export default Header;
