export const AlbumsActionTypes = {
  LOAD_ALBUMS_LOADING: "LOAD_ALBUMS_LOADING",
  LOAD_ALBUMS_LOADED: "LOAD_ALBUMS_LOADED",
  LOAD_ALBUMS_ERROR: "LOAD_ALBUMS_ERROR"
};

export const loadAlbums = () => async dispatch => {
  dispatch({ type: AlbumsActionTypes.LOAD_ALBUMS_LOADING });
  try {
    const res = await fetch("http://localhost:3001/albums");
    const albumsList = await res.json();
    dispatch({ type: AlbumsActionTypes.LOAD_ALBUMS_LOADED, albumsList });
  } catch (error) {
    dispatch({ type: AlbumsActionTypes.LOAD_ALBUMS_ERROR });
  }
};
