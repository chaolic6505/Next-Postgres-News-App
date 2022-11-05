import '../styles/globals.css';
import client from '../apollo-client';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';

import Header from '../components/Header';
import Postbox from '../components/Postbox';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <SessionProvider session={session}>
                <div className='h-screen overflow-y-scroll bg-slate-200'>
                    <Header />
                    <Postbox />
                    <Component {...pageProps} />
                </div>
            </SessionProvider>
        </ApolloProvider>
    );
}

export default MyApp;
