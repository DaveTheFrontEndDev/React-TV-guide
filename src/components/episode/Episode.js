import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

/**
 * Includes all presentational elements for an episode
 */
class Episode extends Component {
  render() {
    return (
      <article className="c-show">
        <Header><h1>{this.props.title}</h1></Header>
        <picture>
          <source
            media="(min-width:800px)"
            srcSet={this.props.originalImage}
          />
          <img
            className="c-show__img"
            src={this.props.mediumImage}
          />
        </picture>
        <article dangerouslySetInnerHTML={{ __html: this.props.summary}}/>
      </article>
    );
  }
}

Episode.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  mediumImage: PropTypes.string,
  originalImage: PropTypes.string,
};

export default Episode;
