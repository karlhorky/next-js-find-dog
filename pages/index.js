import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Auth from '../components/Auth';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Find-your-dog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <Auth />
      {/* <Footer /> */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 2em auto;
        }
        .start {
          margin: 2em auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
