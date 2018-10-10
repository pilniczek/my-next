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
      `}
    </style>
    <Navbar />
    {children}
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossOrigin="anonymous"
    />

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
      integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
      crossOrigin="anonymous"
    />

    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
      integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
      crossOrigin="anonymous"
    />
  </>
);

Layout.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Layout;
