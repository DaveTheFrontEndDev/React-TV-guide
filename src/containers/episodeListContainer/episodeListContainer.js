import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEpisodeList, selectSeason } from '../../actions/episodeList';
import { TabList, TabButton, TabContent } from '../../components/tab';
import Table from '../../components/table';

class episodeContainer extends Component {
  componentDidMount() {
    if (this.props.showId) this.props.fetchEpisodeList(this.props.showId);
  }

  componentDidUpdate() {
    if (this.props.showId.toString() !== this.props.episodesShowId.toString()) this.props.fetchEpisodeList(this.props.showId);
  }

  render() {
    return (
      <Fragment>
        <TabList>
          {this.props.seasons.map( (season, index) => (
            <TabButton
              id={season}
              key={index}
              text={'Season ' + season}
              active={(this.props.selected === season)}
              onClick={this.props.selectSeason}
            />
          ))}
        </TabList>
        <TabContent>
          <Table
            showColumnNames={false}
            columns={[
              {
                text: 'Number',
                width: '10%',
              }, {
                text: 'Airdate',
                width: '25%',
              }, {
                text: 'Name',
              }]}
            rows={
              this.props.episodes
                .filter( episode => (episode.season === this.props.selected))
                .map( episode => ([episode.number, episode.airdate, <Link to={`/show/${this.props.showId}/season/${episode.season}/episode/${episode.number}`}>{episode.name}</Link>]))
            }
          />
        </TabContent>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  seasons: state.episodeList.seasons || [],
  selected: state.episodeList.selected,
  episodesShowId: state.episodeList.showId, // Show ID loaded from API (used to compare against url parameter)
  episodes: state.episodeList.episodes,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchEpisodeList,
  selectSeason,
}, dispatch);

episodeContainer.propTypes = {
  seasons: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  fetchEpisodeList: PropTypes.func.isRequired,
  showId: PropTypes.string.isRequired,
  episodesShowId: PropTypes.string.isRequired,
  selectSeason: PropTypes.func.isRequired,
  episodes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(episodeContainer);
