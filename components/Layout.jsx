import React from 'react';
import Head from 'next/head';
import { node, oneOfType, arrayOf } from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Tomas Pi</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" />
    </Head>
    <style jsx global>
      {`
        .navbar .nav-link { 
          border-top: 0;
          border-bottom: 0;
          min-width: 60px;
        }
        .bd-title {
          margin-top: 1rem;
          margin-bottom: .5rem;
          font-weight: 300;
        }
      `}
    </style>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Layout;
