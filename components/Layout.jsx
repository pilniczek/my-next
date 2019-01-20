import React from 'react';
import Head from 'next/head';
import { node, oneOfType, arrayOf } from 'prop-types';
import Navbar from './Navbar';
import Favicon from './Favicon';
import OG from './OG';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Tomas Pilnaj</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" />
      <Favicon />
      <OG />
    </Head>
    <style jsx global>
      {`
        .slider__wrapper {
          position: relative;
          display: block;
          width: 100%;
          min-height: 200px;
          overflow: hidden;
        }
        .slider__inner {
          position: absolute;
          top: 0;
          display: block;
          min-height: 200px;
          transition: left 200ms;
        }
        .slide {
          float:left;
          min-height: 200px;
        }
        .move__left {
          position: absolute;
          left:0;
          bottom: 50%;
        }
        .move__right {
          position: absolute;
          right: 0;
          bottom: 50%;
        }
        .dots__wrapper {
          position: absolute;
          right: 50%;
          bottom: 0;
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
          flex-grow: 1;
        }
        .card-body {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        .card-links {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        html {
          overflow: -moz-scrollbars-vertical;
          overflow-y: scroll;
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
        .btn {
          min-width: 60px;
        }
        a:not(.nav-item):not(.btn) {
          text-decoration: underline;
        }
        #__next {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          min-height: 100vh;
        }
        .container {
          background-color: $white;
          max-width: 100%;
          width: 100%;
        }
        @media (min-width: 1140px) {
          .container {
            max-width: 1140px;
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
