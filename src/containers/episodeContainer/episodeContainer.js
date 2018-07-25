import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEpisode } from '../../actions/episode';
import { fetchShow } from '../../actions/show';
import Details from '../../components/details';
import Back from '../../components/back';

class episodeContainer extends Component {
  componentDidMount() {
    this.props.fetchEpisode(this.props.match.params.showId, this.props.match.params.season, this.props.match.params.episode);
    this.props.fetchShow(this.props.match.params.showId);
  }

  componentDidUpdate() {
    if (
      (this.props.match.params.episode !== this.props.episode)
      &&
      !this.props.hasError
    ) {
      this.props.fetchEpisode(this.props.match.params.showId, this.props.match.params.season, this.props.match.params.episode);
      this.props.fetchShow(this.props.match.params.showId);
    }
  }

  render() {
    return (
      <Fragment>
        <Back
          text={this.props.showName}
          link={`/show/${this.props.match.params.showId}`}
        />
        <Details
          title={`S${this.props.season} E${this.props.episode}: ${this.props.episodeName}`}
          summary={this.props.episodeSummary}
          mediumImage={this.props.episodeMediumImage}
          originalImage={this.props.episodeOriginalImage}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  hasError: state.episode.hasError,
  episode: state.episode.episode,
  season: state.episode.season,
  showId: state.episode.showId,
  showName: state.show.name,
  episodeName: state.episode.name,
  episodeSummary: state.episode.summary,
  episodeMediumImage: state.episode.mediumImage,
  episodeOriginalImage: state.episode.originalImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEpisode,
  fetchShow,
}, dispatch);

episodeContainer.propTypes = {
  hasError: PropTypes.bool,
  fetchEpisode: PropTypes.func.isRequired,
  fetchShow: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.string.isRequired,
      episode: PropTypes.number.isRequired,
      season: PropTypes.number.isRequired,
    }),
  }),
  showId: PropTypes.number.isRequired,
  showName: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeSummary: PropTypes.string.isRequired,
  episodeMediumImage: PropTypes.string,
  episodeOriginalImage: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(episodeContainer);
