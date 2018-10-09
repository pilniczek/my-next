import React from 'react';
import ActiveLink from './ActiveLink';

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
      <span className="navbar-brand">Tomas Pilnaj</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
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
          <ActiveLink href="/pi" className="nav-item">
            <span className="nav-link">Pi</span>
          </ActiveLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
