import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import {
    XIcon,
    MenuIcon,
    HomeIcon,
    SearchIcon,
    LogoutIcon,
    ChevronDownIcon,
} from '@heroicons/react/solid';
import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    VideoCameraIcon,
    SpeakerphoneIcon,
} from '@heroicons/react/outline';

const renderIcons = (hasBorder?: boolean) => {
    return (
        <>
            <SparklesIcon className='icon' />
            <GlobeIcon className='icon' />
            <VideoCameraIcon className='icon' />
            {hasBorder ? <hr className='h-10 border border-gray-100' /> : null}
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <PlusIcon className='icon' />
            <SpeakerphoneIcon className='icon' />
        </>
    );
};
function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { data: session } = useSession();

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

            {/* Hidden if smaller screen */}
            <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
                {renderIcons(true)}
            </div>

            {/* Sign in - Sign out button */}
            {session ? (
                <div
                    onClick={() => signOut()}
                    className='hidden lg:flex items-center space-x-2 border border-gray-100 cursor-pointer p-2'
                >
                    <div className='relative h-5 w-5 flex-shrink-0'>
                        <Image
                            fill={true}
                            alt='Sign Out Button'
                            src='/grey-reddit.png'
                        />
                    </div>
                    <div className='flex-1 text-xs'>
                        <p className='truncate'>{session?.user?.name}</p>
                    </div>
                    <LogoutIcon className='h-5 flex-shrink-0 text-gray-400' />
                </div>
            ) : (
                <div
                    onClick={() => signIn()}
                    className='hidden lg:flex items-center space-x-2 border border-gray-100 cursor-pointer p-2'
                >
                    <div className='relative h-5 w-5 flex-shrink-0'>
                        <Image
                            fill={true}
                            alt='Sign In Button'
                            src='/grey-reddit.png'
                        />
                    </div>
                    <p className='text-slate-900'>Sign In</p>
                </div>
            )}

            {/* Dropdown menu */}
            <div className='ml-5 flex items-center lg:hidden relative'>
                {toggleMenu ? (
                    <XIcon
                        className='icon'
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <MenuIcon
                        className='icon'
                        onClick={() => setToggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <div className='flex z-20 justify-end items-end flex-col text-center py-2 px-2 absolute top-12 -right-1.5 mt-1 scale min-w-max bg-white'>
                        {renderIcons()}
                        {session ? (
                            <LogoutIcon
                                onClick={() => signOut()}
                                className=' text-gray-400 icon'
                            />
                        ) : (
                            <div
                                onClick={() => signIn()}
                                className='flex items-center space-x-2 border border-gray-100 cursor-pointer p-2 mt-1'
                            >
                                <div className='relative h-5 w-5 flex-shrink-0'>
                                    <Image
                                        alt='Sign In Button'
                                        src='/grey-reddit.png'
                                    />
                                </div>
                                <p className='text-gray-400'>Sign In</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
