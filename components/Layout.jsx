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
        .flex {
          display: flex;
        }
        .card {
          width: 200px;
          flex-grow: 1;
        }
        .card-body {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        .card-links > .card-link {
          display: block;
          margin: 0;
          padding: 0;
        }
        button {
          background: transparent;
        }
        html {
          overflow: -moz-scrollbars-vertical; 
          overflow-y: scroll;
        }
        html {
          overflow-y:scroll;
        }
        .nav-item {
          text-align: center;
        }
        .nav-item:hover {
          text-decoration: none;
        }
        img {
          max-width: 100%;
        }
        .col-auto {
          max-width: 100%;
        }
        p {
          font-size: 1.171875rem;
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