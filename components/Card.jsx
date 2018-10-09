import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import Iterator from './Iterator';


const Card = ({
  title, subtitle, content, links,
}) => (
  <div className="card mb-4">
    <h4 className="card-header">
      {title}
    </h4>
    <div className="card-body">
      <h6 className="card-subtitle text-muted">
        <i>{subtitle}</i>
      </h6>
      <p className="card-text mb-2">
        {content}
      </p>

      <Iterator
        items={links.map(item => ({
          href: item.href,
          label: item.label,
        }))}
        Component={({ href, label }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="card-link">
            {label}
          </a>
        )}
      />
    </div>
  </div>
);

Card.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  content: string.isRequired,
  links: arrayOf(object).isRequired,
};

export default Card;
