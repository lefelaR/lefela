import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Rakheoana Lefela | software developer</title>
                <link rel="icon" href="/assets/images/profile/logo.png" />
            </Head>

            <Header />
              <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;