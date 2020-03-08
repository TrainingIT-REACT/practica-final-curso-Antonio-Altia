import { SongsActionTypes } from "../actions/SongsActions";

const initialState = {
  loading: true,
  loadingAlbum: true,
  songsList: [],
  selectedAlbum: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SongsActionTypes.SELECT_ALBUM:
      return {
        ...state,
        selectedAlbum: action.album
      };
    case SongsActionTypes.LOAD_SONGS_LOADING:
      return {
        ...state,
        loading: true,
        songsList: []
      };
    case SongsActionTypes.LOAD_SONGS_LOADED:
      return { ...state, loading: false, songsList: action.songsList };
    case SongsActionTypes.LOAD_SONGS_ERROR:
      //En caso de error se deja la lista vacía
      return { ...state, loading: false, songsList: [] };
    case SongsActionTypes.LOAD_ALBUM_DETAIL_LOADING:
      return {
        ...state,
        loadingAlbum: true,
        selectedAlbum: null
      };
    case SongsActionTypes.LOAD_ALBUM_DETAIL_LOADED:
      return { ...state, loadingAlbum: false, selectedAlbum: action.album[0] };
    case SongsActionTypes.LOAD_ALBUM_DETAIL_ERROR:
      //En caso de error se deja la lista vacía
      return { ...state, loadingAlbum: false, selectedAlbum: null };
    default:
      return state;
  }
};
