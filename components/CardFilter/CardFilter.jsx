import React from 'react';
import {
  string, shape, func, bool,
} from 'prop-types';

const CardFilter = ({
  id, isChecked, name, actions: { checked, visible },
}) => {
  const handleChange = () => {
    checked(id, isChecked);
    visible(id, isChecked);
  };
  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pb-5">
            <label
              htmlFor={id}
              key={`label-${id}`}
            >
              <input
                type="checkbox"
                id={id}
                key={`checkbox-${id}`}
                name={name}
                value="scales"
                checked={isChecked}
                onChange={handleChange}
              />
              {name}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};


CardFilter.propTypes = {
  id: string.isRequired,
  isChecked: bool.isRequired,
  name: string.isRequired,
  actions: shape({
    checked: func.isRequired,
  }).isRequired,
};

export default CardFilter;
