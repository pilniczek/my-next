import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import Iterator from './Iterator';


const CardExtended = ({
  title, subtitle, content, links, influence,
}) => (
  <div className="card mb-4">
    <h4 className="card-header">
      {title}
    </h4>
    <div className="card-body">
      <span className="card-subtitle text-muted">
        <i>
          {`${subtitle}, ${influence} influence`}
        </i>
      </span>
      <p className="card-text mb-2">
        {content}
      </p>
      <div className="card-links">
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
  </div>
);

CardExtended.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  content: string.isRequired,
  links: arrayOf(object).isRequired,
  influence: string.isRequired,
};

export default CardExtended;
