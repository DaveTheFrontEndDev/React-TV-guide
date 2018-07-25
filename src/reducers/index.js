
import { combineReducers } from 'redux';
import show from './show';
import episode from './episode';
import episodeList from './episodeList';

export default combineReducers({
  show,
  episode,
  episodeList,
});
