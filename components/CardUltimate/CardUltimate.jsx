import React from 'react';
import {
  string, arrayOf, object, bool,
} from 'prop-types';
import Iterator from '../Iterator';


const CardUltimate = ({
  id, age, title, subtitle, content, links, influence, visible, className, company,
}) => {
  if (visible) {
    return (
      <div className={`${className}`} id={id} company={company} age={age}>
        <div className="card mb-4">
          <h4 className="card-header p-3">
            {title}
          </h4>
          <div className="card-body px-3 pt-3 pb-2">
            <span className="card-subtitle text-muted mb-2">
              <i>
                {`${subtitle}, ${influence} influence, ${age} project`}
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
                  <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mb-2">
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
  age: string.isRequired,
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
