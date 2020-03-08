import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home/Home";
import NavBar from "./navigation/NavBar";
import Login from "./login/Login";
import Albums from "./albums/Albums";
import AlbumDetail from "./albums/AlbumDetail";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
const Playlist = React.lazy(() => import("./playlist/Playlist"));
const Player = React.lazy(() => import("./player/Player"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="block1">
        <main>
          <h1>Spotifake</h1>
          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/albumDetail" exact component={AlbumDetail} />
          <Route path="/profile" exact component={Login} />
        </main>
        <React.Suspense fallback="Cargando lista de reproducción">
          <div className="playlist">
            <Playlist />
          </div>
        </React.Suspense>
      </div>
      <div className="block2">
        <nav>
          <NavBar />
        </nav>
        <React.Suspense fallback="Cargando reproductor">
          <section title="Reproductor" className="player">
            <Player />
          </section>
        </React.Suspense>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
