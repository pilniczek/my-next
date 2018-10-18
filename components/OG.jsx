import React from 'react';
import { string } from 'prop-types';

const OG = ({ path }) => (
      <>
        <meta property="og:image" content={`${path}/og-image.jpg`} />
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta property="og:title" content="Tomas Pilnaj" />
        <meta property="og:description" content="Web developer. Sometimes content admin." />
        <meta property="og:url" content="tomas-pilnaj.cz" />
      </>
);


OG.defaultProps = {
  path: '/static/og',
};

OG.propTypes = {
  path: string,
};

export default OG;
