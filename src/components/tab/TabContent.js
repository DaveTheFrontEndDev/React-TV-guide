import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * List of tab items
 */
class TabContent extends Component {
  render() {
    return (
      <div className="c-tab__content">
        {this.props.children}
      </div>
    );
  }
}

TabContent.propTypes = {
  children: PropTypes.element,
};

export default TabContent;
