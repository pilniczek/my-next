import React from 'react';
import { string } from 'prop-types';

const Quote = ({ text, author }) => (
  <div className="row">
    <div className="col">
      <div className="bs-component">
        <blockquote className="blockquote">
          <p className="mb-0">
            {text}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">
              {author}
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
);

Quote.propTypes = {
  text: string.isRequired,
  author: string.isRequired,
};

export default Quote;
