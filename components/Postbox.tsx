import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';

function Postbox() {
    const { data: session } = useSession();

    return (
        <form className='sticky top-16 z-10 bg-white border-rounded border-gray-300 p-2'>
            <div className='flex items-center space-x-3'>
                <Avatar />
                {session ? (
                    <input
                        type='text'
                        disabled={!session}
                        placeholder={'Create a post'}
                        className='bg-gray-50 p-2 pl-5 outline-none flex-1 rounded-md'
                    />
                ) : null}
            </div>
        </form>
    );
}

export default Postbox;
