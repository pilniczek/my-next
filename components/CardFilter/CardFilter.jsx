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
  const labelClass = isChecked ? 'btn-default' : 'btn-primary';
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <label
        htmlFor={id}
        key={`label-${id}`}
        className={`btn btn-sm ${labelClass}`}
        style={{ width: '100%' }}
      >
        <input
          type="checkbox"
          id={id}
          key={`checkbox-${id}`}
          name={name}
          value="scales"
          checked={isChecked}
          onChange={handleChange}
          style={{ display: 'none' }}
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
