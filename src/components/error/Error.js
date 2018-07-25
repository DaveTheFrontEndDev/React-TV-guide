import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Display information for an error
 */
class Error extends Component {
  render() {
    return (
      <section className="c-error">
        <p className="c-error__message">Woops, there was an error. <span>{this.props.message}</span></p>
      </section>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
