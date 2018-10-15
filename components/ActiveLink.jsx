import React from 'react';
import { withRouter } from 'next/router';
import {
  arrayOf, string, oneOfType, node, object, shape,
} from 'prop-types';
import uniId from '../utils/uniId';

const ActiveLink = ({
  children, router, href, className,
}) => {
  const handleClick = () => {
    router.push(href);
  };
  const active = router.pathname === href ? 'active' : '';
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${active}`}
      key={uniId()}
    >
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
  href: string.isRequired,
  className: string.isRequired,
  router: shape(object.isRequired).isRequired,
};

export default withRouter(ActiveLink);
