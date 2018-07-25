
const initialState = {
  episode: 0,
  season: 0,
  name: '',
  summary: '',
  mediumImage: '',
  originalImage: '',
  isLoading: false,
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_EPISODE_REQUEST': {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  case 'FETCH_EPISODE_LOAD': {
    return {
      ...state,
      episode: action.episode,
      season: action.season,
      name: action.name,
      summary: action.summary,
      mediumImage: action.mediumImage,
      originalImage: action.originalImage,
      isLoading: false,
    };
  }
  case 'FETCH_EPISODE_ERROR': {
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
