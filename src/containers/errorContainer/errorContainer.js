import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/error';

/**
 * Error Container
 */
class errorContainer extends Component {
  /**
   * I have decided to use state for this container due to a lack of complexity
   */
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          error={this.state.errorMessage}
        />
      );
    }
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: info,
    });
  }
}

errorContainer.propTypes = {
  children: PropTypes.element,
};

export default errorContainer;
