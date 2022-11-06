import '../styles/globals.css';
import client from '../apollo-client';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';

import Header from '../components/Header';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <SessionProvider session={session}>
                <Toaster />
                <div className='h-screen overflow-y-scroll bg-slate-200'>
                    <Header />
                    <Component {...pageProps} />
                </div>
            </SessionProvider>
        </ApolloProvider>
    );
}

export default MyApp;
