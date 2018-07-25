
import {FETCH_SHOW_REQUEST, FETCH_SHOW_LOAD, FETCH_SHOW_ERROR} from '../constants/show';

/**
 * Fetch information about a show from the api
 * @param showId
 */
export const fetchShow = (showId) => dispatch => {
  dispatch({
    type: FETCH_SHOW_REQUEST,
  });

  fetch(`http://api.tvmaze.com/shows/${showId}`)
    .then(response => {
      return response.json();
    })
    .then( data => {
      if (data.status === 404) {
        dispatch({
          type: FETCH_SHOW_ERROR,
          error: 404,
        });
      }
      dispatch({
        type: FETCH_SHOW_LOAD,
        id: showId,
        name: data.name,
        summary: data.summary,
        mediumImage: data.image.medium,
        originalImage: data.image.original,
      });
    })
    .catch( error => {
      dispatch({
        type: FETCH_SHOW_ERROR,
        error,
      });
    });
};
