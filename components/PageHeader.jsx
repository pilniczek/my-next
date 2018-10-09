import React from 'react';
import { string } from 'prop-types';


const PageHeader = ({ title }) => (
  <div className="page-header">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="bd-title">
          {title}
        </h1>
      </div>
    </div>
  </div>
);

PageHeader.propTypes = {
  title: string.isRequired,
};

export default PageHeader;
