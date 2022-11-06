import React from 'react';
import { Jelly } from '@uiball/loaders';

type Props = {
    size: number;
};

export default function Loader({ size }: Props) {
    return (
        <div className='flex w-full items-center justify-center p-10 text-xl'>
            <Jelly size={size} color='#FF4501' />
        </div>
    );
}
