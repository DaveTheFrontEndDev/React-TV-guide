import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Main content header
 */
class Header extends Component {
  render() {
    return (
      <header className="c-show__header">{this.props.children}</header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element,
};

export default Header;
