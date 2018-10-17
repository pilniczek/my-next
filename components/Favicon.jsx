import React from 'react';
import { string } from 'prop-types';

const Favicon = ({ path }) => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href={`${path}/apple-touch-icon.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`${path}/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`${path}/favicon-16x16.png`} />
    <link rel="manifest" href={`${path}/site.webmanifest`} />
    <link rel="mask-icon" href={`${path}/safari-pinned-tab.svg`} color="#7c7c7c" />
    <link rel="shortcut icon" href={`${path}/favicon.ico`} />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-TileImage" content={`${path}/mstile-144x144.png`} />
    <meta name="msapplication-config" content={`${path}/browserconfig.xml`} />
    <meta name="theme-color" content="#000000" />
  </>
);

Favicon.defaultProps = {
  path: '/static/favicon',
};

Favicon.propTypes = {
  path: string,
};

export default Favicon;
