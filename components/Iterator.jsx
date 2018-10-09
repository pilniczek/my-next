import React from 'react';
import {
  func, arrayOf, string, object,
} from 'prop-types';
import uniId from '../utils/uniId';

const Iterator = ({ Component, items }) => {
  const iteration = (iterationItems, IterationComponent) => {
    let total = 0;
    if (iterationItems && iterationItems.length) {
      total = iterationItems.length;
      return iterationItems.map((iterationItem, index) => (
        <IterationComponent
          key={uniId()}
          {...iterationItem}
          index={index}
          total={total}
          first={index === 0}
          last={index === total - 1}
        />
      ));
    }
    return null;
  };
  return (
    <>
      {iteration(items, props => <Component {...props} />)}
    </>
  );
};

Iterator.propTypes = {
  Component: func.isRequired,
  items: arrayOf(object).isRequired,
  className: string,
};

Iterator.defaultProps = {
  className: '',
};

export default Iterator;
