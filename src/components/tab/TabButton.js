import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Tab Button
 */
class TabButton extends Component {
  render() {
    return (
      <li className="c-tab__item">
        <button className={`c-button--secondary ${this.props.active ? '-active' : ''}`} onClick={() => {this.props.onClick(this.props.id);}}>
          {this.props.text}
        </button>
      </li>
    );
  }
}

TabButton.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default TabButton;
