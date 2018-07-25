
import {FETCH_EPISODE_REQUEST, FETCH_EPISODE_LOAD, FETCH_EPISODE_ERROR} from '../constants/episode';

/**
 * Fetch episode information from api
 * @param showId
 * @param season
 * @param episode
 */
export const fetchEpisode = (showId, season, episode) => dispatch => {
  dispatch({
    type: FETCH_EPISODE_REQUEST,
    showId,
    episode,
  });

  fetch(`http://api.tvmaze.com/shows/${showId}/episodebynumber?season=${season}&number=${episode}`)
    .then(response => {
      return response.json();
    })
    .then( data => {
      if (data.status === 404) {
        dispatch({
          type: FETCH_EPISODE_ERROR,
          error: 404,
        });
      }
      dispatch({
        type: FETCH_EPISODE_LOAD,
        season,
        episode,
        name: data.name,
        summary: data.summary || 'No Summary available',
        mediumImage: data.image.medium || '',
        originalImage: data.image.original || '',
      });
    })
    .catch( error => {
      dispatch({
        type: FETCH_EPISODE_ERROR,
        error,
      });
    });
};
