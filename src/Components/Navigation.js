import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <header>
      <nav
        className="row justify-content-center align-items-center"
        id="main-nav"
      >
        <a className="nav-link btn btn-primary" href="/about">
          About
        </a>
        <a className="nav-link" href="/contact">
          Contact
        </a>
        <a className="nav-link" href="/blog">
          Blog
        </a>
        <a className="nav-link" href="/resources">
          Resources
        </a>
      </nav>
    </header>
  );
};

export default Nav;
