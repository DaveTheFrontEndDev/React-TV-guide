import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

import App from './components/app';
import './sass/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
