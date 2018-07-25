import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

/**
 * Includes all presentational elements for a show
 */
class Details extends Component {
  render() {
    return (
      <article className="c-details">
        <Header><h1>{this.props.title}</h1></Header>
        <picture>
          <source
            media="(min-width:800px)"
            srcSet={this.props.originalImage}
          />
          <img
            className="c-details__img"
            src={this.props.mediumImage}
          />
        </picture>
        <article dangerouslySetInnerHTML={{ __html: this.props.summary}}/>
      </article>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  mediumImage: PropTypes.string,
  originalImage: PropTypes.string,
};

export default Details;
