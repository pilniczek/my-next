import React from 'react';
import {
  bool, oneOfType, string, number, shape, func,
} from 'prop-types';
import ActiveLink from '../ActiveLink';
import Iterator from '../Iterator';
import data from '../../data/menu.json';

const menu = data;

const Navbar = ({ id, open, actions: { toggle } }) => {
  const handleClick = () => (toggle(id, open));
  const showed = open ? 'show' : '';
  const expanded = open ? 'true' : 'false';
  const collapsed = open ? 'collapsed' : '';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary pl-0">
      <div className="container">
        <span className="navbar-brand">
          {menu.brand}
        </span>
        <button
          onClick={handleClick}
          className={`navbar-toggler ${collapsed}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${showed}`} id="navbarColor02">
          <div className="navbar-nav mr-auto">
            <Iterator
              items={
                menu.menu.map(item => ({
                  children: item.label,
                  href: item.link,
                }))
              }
              Component={props => (
                <ActiveLink {...props} className="nav-item">
                  <span className="nav-link">
                    {props.children}
                  </span>
                </ActiveLink>
              )}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  id: oneOfType([
    string,
    number,
  ]).isRequired,
  open: bool.isRequired,
  actions: shape({
    toggle: func.isRequired,
  }).isRequired,
};

export default Navbar;
