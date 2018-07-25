import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * List of tab items
 */
class TabList extends Component {
  render() {
    return (
      <ul className="c-tab__list">
        {this.props.children}
      </ul>
    );
  }
}

TabList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TabList;
