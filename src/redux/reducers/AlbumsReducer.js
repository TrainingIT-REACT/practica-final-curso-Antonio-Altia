import { AlbumsActionTypes } from "../actions/AlbumsActions";

const initialState = {
  loading: true,
  albumsList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AlbumsActionTypes.LOAD_ALBUMS_LOADING:
      return { loading: true, albumsList: [] };
    case AlbumsActionTypes.LOAD_ALBUMS_LOADED:
      return { loading: false, albumsList: action.albumsList };
    case AlbumsActionTypes.LOAD_ALBUMS_ERROR:
      return { loading: false, albumsList: [] };
    default:
      return state;
  }
};
