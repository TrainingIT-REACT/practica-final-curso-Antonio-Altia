import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home';
import NavBar from './navigation/NavBar'
import Login from './login/Login'
import Playlist from './playlist/Playlist'
import Player from './player/Player'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="block1">
        <main>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/albums" exact component={Login} />
          <Route path="/albums/detail" exact component={Login} />
          <Route path="/profile" exact component={Login} />
        </main>
        <playlist>
          <Playlist></Playlist>
        </playlist>
      </div>
      <div className="block2">
        <nav>
          <NavBar />
        </nav>
        <player>
          <Player />
        </player>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
