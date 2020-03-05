import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import player from "./reducers/PlayerReducer";
import playlist from "./reducers/PlaylistReducer";
import albums from "./reducers/AlbumsReducer";
import profile from "./reducers/ProfileReducer";

export const initialState = {
  player: {
    active: false,
    timeMark: 0,
    songId: null,
    playing: false
  },
  profile: {
    userName: null,
    songIdsHistory: []
  },
  albums: {
    albumsList: null
  },
  playList: {
    songs: []
  }
};

export const cloneState = state => {
  const originalAlbumList = state.albums.albumList;
  return {
    player: {
      ...state.player
    },
    profile: {
      ...state.profile
    },
    albums: {
      albumsList: originalAlbumList ? [...state.albumsList] : null
    },
    playList: {
      ...state.playList,
      songs: [...state.playList.songs]
    }
  };
};

export const store = createStore(
  combineReducers({
    player,
    profile,
    albums
  }),
  applyMiddleware(thunk)
  /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);
