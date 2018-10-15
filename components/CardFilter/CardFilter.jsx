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
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
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
