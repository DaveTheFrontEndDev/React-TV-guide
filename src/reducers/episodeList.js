
import {FETCH_EPISODE_LIST_REQUEST, FETCH_EPISODE_LIST_LOAD, SELECT_SEASON} from '../constants/episodeList';

const initialState = {
  isLoading: false,
  seasons: [],
  selected: 1,
  episodes: [],
  showId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_EPISODE_LIST_REQUEST: {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  case FETCH_EPISODE_LIST_LOAD: {
    return {
      ...state,
      isLoading: false,
      seasons: action.seasons,
      selected: state.selected || 1,
      episodes: action.episodes,
      showId: action.showId,
    };
  }
  case SELECT_SEASON: {
    return {
      ...state,
      selected: action.selected,
    };
  }
  case 'FETCH_EPISODE_LIST_ERROR': {
    return {
      ...initialState,
      isLoading: false,
      hasError: true,
    };
  }
  default:
    return state;
  }
};
