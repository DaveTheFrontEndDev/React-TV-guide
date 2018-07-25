
import {FETCH_EPISODE_LIST_REQUEST, FETCH_EPISODE_LIST_LOAD, FETCH_EPISODE_LIST_ERROR, SELECT_SEASON} from '../constants/episodeList';

/**
 * Fetch a list of episodes and seasons from api
 * @param showId
 */
export const fetchEpisodeList = (showId) => dispatch => {
  dispatch({
    type: FETCH_EPISODE_LIST_REQUEST,
  });

  fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
    .then(response => {
      return response.json();
    })
    .then( data => {
      if (data.status === 404) {
        dispatch({
          type: FETCH_EPISODE_LIST_ERROR,
          error: 404,
        });
      }
      dispatch({
        type: FETCH_EPISODE_LIST_LOAD,
        seasons: [...new Set(data.map( season => (season.season)))],
        episodes: data,
        showId,
      });
    })
    .catch( error => {
      dispatch({
        type: FETCH_EPISODE_LIST_ERROR,
        error,
      });
    });
};

/**
 * Select a season for displaying a list of episodes
 * @param seasonId
 */
export const selectSeason = (seasonId) => dispatch => {
  dispatch({
    type: SELECT_SEASON,
    selected: seasonId,
  });
};
