import Head from 'next/head';
import type { NextPage } from 'next';

import Feed from '../components/Feed';
import Postbox from '../components/Postbox';

const Home: NextPage = () => {
    return (
        <div className='my-7 mx-auto max-w-5xl'>
            <Head>
                <title>Reddit 2.0 Clone</title>
            </Head>

            <Postbox />

            <div className='flex'>
                <Feed />
            </div>
        </div>
    );
};

export default Home;
