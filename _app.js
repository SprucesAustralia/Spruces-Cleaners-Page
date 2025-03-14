import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

// Import animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Spruces Cleaners - Australian Cleaning Company</title>
        <meta name="description" content="Find cleaning jobs in Australia, access professional training courses, and build your cleaning career with Spruces Cleaners." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
