import React from 'react';
import {
  string, arrayOf, object, bool,
} from 'prop-types';
import Iterator from '../Iterator';


const CardUltimate = ({
  id, title, subtitle, content, links, influence, visible, className, company,
}) => {
  if (visible) {
    return (
      <div className={`${className}`} id={id} company={company}>
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
      </div>
    );
  }
  return null;
};

CardUltimate.propTypes = {
  id: string.isRequired,
  company: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  content: string.isRequired,
  links: arrayOf(object).isRequired,
  influence: string.isRequired,
  visible: bool.isRequired,
  className: string.isRequired,
};

export default CardUltimate;
