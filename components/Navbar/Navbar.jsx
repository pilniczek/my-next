import React from 'react';
import {
  bool, oneOfType, string, number, shape, func,
} from 'prop-types';
import ActiveLink from '../ActiveLink';

const Navbar = ({ id, open, actions: { toggle } }) => {
  const handleClick = () => (toggle(id, open));
  const showed = open ? 'show' : '';
  const expanded = open ? 'true' : 'false';
  const collapsed = open ? 'collapsed' : '';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">Tomas Pilnaj</span>
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
            <ActiveLink href="/" className="nav-item">
              <span className="nav-link">About</span>
            </ActiveLink>
            <ActiveLink href="/portfolio" className="nav-item">
              <span className="nav-link">Portfolio</span>
            </ActiveLink>
            <ActiveLink href="/contact" className="nav-item">
              <span className="nav-link">Contact</span>
            </ActiveLink>
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
