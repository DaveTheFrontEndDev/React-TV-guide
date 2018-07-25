import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Back
 */
class Back extends Component {
  render() {
    return (
      <span className="c-back"> {'<'} Back to <Link to={this.props.link}>{this.props.text}</Link></span>
    );
  }
}

Back.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Back;
