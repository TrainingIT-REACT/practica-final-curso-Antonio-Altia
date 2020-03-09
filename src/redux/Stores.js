import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import player from "./reducers/PlayerReducer";
import playlist from "./reducers/PlaylistReducer";
import albums from "./reducers/AlbumsReducer";
import profile from "./reducers/ProfileReducer";
import songs from "./reducers/SongsReducer";

export const initialState = {
  player: {
    active: false,
    timeMark: 0,
    song: null,
    playing: false
  },
  profile: {
    userName: null,
    songHistory: []
  },
  albums: {
    loading: true,
    albumsList: []
  },
  songs: {
    loading: true,
    songsList: [],
    selectedAlbum: null
  },
  playList: {
    songs: [],
    currentIndex: null
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    player,
    profile,
    albums,
    playlist,
    songs
  }),
  composeEnhancers(applyMiddleware(thunk))
);
