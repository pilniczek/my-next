import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
      <span className="navbar-brand" href="#">Tomas Pi</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/"><button className="nav-link" type="button">Home</button></Link>
          </li>
          <li className="nav-item active">
            <Link href="/pi"><button className="nav-link" type="button">Pi</button></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
