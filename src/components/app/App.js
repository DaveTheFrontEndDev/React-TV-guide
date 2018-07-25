import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ErrorContainer from '../../containers/errorContainer';
import Home from '../home';
import Navigation from '../nav';
import ShowContainer from '../../containers/showContainer';
import EpisodeContainer from '../../containers/episodeContainer';

/**
 * Main app component
 */
class App extends Component {
  render() {
    return (
      <ErrorContainer>
        <div>
          <header className="c-header">
            <img className="c-header__svg" src="/resources/logo.svg"/>
            <Navigation/>
          </header>
          <main className="c-main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/show/:showId" component={ShowContainer}/>
            <Route exact path="/show/:showId/season/:season/episode/:episode" component={EpisodeContainer}/>
          </main>
        </div>
      </ErrorContainer>
    );
  }
}

export default App;
