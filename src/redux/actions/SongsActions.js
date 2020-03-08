export const SongsActionTypes = {
  LOAD_SONGS_LOADING: "LOAD_SONGS_LOADING",
  LOAD_SONGS_LOADED: "LOAD_SONGS_LOADED",
  LOAD_SONGS_ERROR: "LOAD_SONGS_ERROR",
  SELECT_ALBUM: "SELECT_ALBUM",
  LOAD_ALBUM_DETAIL_LOADING: "LOAD_ALBUM_DETAIL_LOADING",
  LOAD_ALBUM_DETAIL_LOADED: "LOAD_ALBUM_DETAIL_LOADED",
  LOAD_ALBUM_DETAIL_ERROR: "LOAD_ALBUM_DETAIL_ERROR"
};

export const selectAlbum = album => ({
  type: SongsActionTypes.SELECT_ALBUM,
  album
});

export const loadSongsByAlbum = selectedAlbumId => async dispatch => {
  dispatch({ type: SongsActionTypes.LOAD_SONGS_LOADING, selectedAlbumId });
  try {
    const res = await fetch(
      "http://localhost:3001/songs?album_id=" + selectedAlbumId
    );
    const songsList = await res.json();
    dispatch({ type: SongsActionTypes.LOAD_SONGS_LOADED, songsList });
  } catch (error) {
    dispatch({ type: SongsActionTypes.LOAD_SONGS_ERROR });
  }
};

export const loadAlbumDetail = albumId => async dispatch => {
  dispatch({ type: SongsActionTypes.LOAD_ALBUM_DETAIL_LOADING });
  try {
    const res = await fetch("http://localhost:3001/albums?id=" + albumId);
    const album = await res.json();
    dispatch({ type: SongsActionTypes.LOAD_ALBUM_DETAIL_LOADED, album });
  } catch (error) {
    dispatch({ type: SongsActionTypes.LOAD_ALBUM_DETAIL_ERROR });
  }
};
