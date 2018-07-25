import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchShow } from '../../actions/show';
import Details from '../../components/details';
import Error from '../../components/error';
import EpisodeList from '../episodeListContainer';

class showContainer extends Component {
  componentDidMount() {
    this.props.fetchShow(this.props.match.params.showId);
  }

  componentDidUpdate() {
    if (this.props.match.params.showId.toString() !== this.props.showId.toString() && !this.props.hasError) this.props.fetchShow(this.props.match.params.showId);
  }

  render() {
    /**
     * I would have caught this with the errorContainer, however I couldn't get this working in time
     */
    if (this.props.hasError) {
      /**
       * Would have thrown custom Error instead
       */
      return (
        <Error
          message="Show not found"
        />
      );
    }
    return (
      <Fragment>
        <Details
          title={this.props.showName}
          summary={this.props.showSummary}
          mediumImage={this.props.showMediumImage}
          originalImage={this.props.showOriginalImage}
        />
        <EpisodeList
          showId={this.props.showId}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showId: state.show.id,
  showName: state.show.name,
  showSummary: state.show.summary,
  showMediumImage: state.show.mediumImage,
  showOriginalImage: state.show.originalImage,
  hasError: state.show.hasError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchShow,
}, dispatch);

showContainer.propTypes = {
  hasError: PropTypes.bool,
  fetchShow: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.string.isRequired,
    }),
  }),
  showName: PropTypes.string.isRequired,
  showSummary: PropTypes.string.isRequired,
  showMediumImage: PropTypes.string,
  showOriginalImage: PropTypes.string,
  showId: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(showContainer);
