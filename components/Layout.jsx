import React from 'react';
import Head from 'next/head';
import { node, oneOfType, arrayOf } from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Tomas Pilnaj</title>
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
        #__next {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          min-height: 100vh;
        }
        @media (max-width: 991.98px){
          .navbar-collapse.show {
            padding-bottom: 10px !important;
          }
        }
      `}
    </style>
    <Navbar id="menu" />
    {children}
  </>
);

Layout.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Layout;
