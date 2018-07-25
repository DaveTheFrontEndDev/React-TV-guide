import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="c-nav">
        <Link to="/show/6771" className="c-nav__link">
          <button className="c-button--primary c-nav__button">PowerPuff Girls</button>
        </Link>
        <Link to="/show/36119" className="c-nav__link">
          <button className="c-button--primary c-nav__button">Carter</button>
        </Link>
        <Link to="/show/1825" className="c-nav__link">
          <button className="c-button--primary c-nav__button">The Expanse</button>
        </Link>
      </nav>
    );
  }
}

export default Nav;
