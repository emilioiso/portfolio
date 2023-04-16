import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>emilioiso</title>
            </Head>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                <h1>Emilio Gutiérrez Torres</h1>
                <p>Soon...</p>
            </main>
        </>
    );
}
