import React from 'react';
import { string } from 'prop-types';

const Quote = ({ text, author }) => (
  <div className="jumbotron mb-0">
    <div className="container">
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
);

Quote.propTypes = {
  text: string.isRequired,
  author: string.isRequired,
};

export default Quote;
