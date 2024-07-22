// components/Layout.js
import React from 'react';
import Head from 'next/head';
import Footer from './Footer'; // Import the Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>DUCK Landing Page</title>
        <meta name="description" content="Join DUCK – Earn Rewards for Using Telegram!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer /> {/* Include the Footer component here */}
    </>
  );
};

export default Layout;