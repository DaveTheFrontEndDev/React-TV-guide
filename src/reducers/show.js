
import {FETCH_SHOW_REQUEST, FETCH_SHOW_LOAD} from '../constants/show';

const initialState = {
  isLoading: false,
  hasError: false,
  id: '',
  name: '',
  summary: '',
  mediumImage: '',
  originalImage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_SHOW_REQUEST: {
    return {
      ...initialState,
      isLoading: true,
    };
  }
  case FETCH_SHOW_LOAD: {
    return {
      ...state,
      isLoading: false,
      id: action.id,
      name: action.name,
      summary: action.summary,
      mediumImage: action.mediumImage,
      originalImage: action.originalImage,
    };
  }
  case 'FETCH_SHOW_ERROR': {
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
