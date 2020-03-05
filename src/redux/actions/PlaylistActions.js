export const PlaylistActionTypes = {
  CLEAR_PLAY_LIST: "CLEAR_PLAY_LIST",
  ADD_SONGS_TO_PLAYLIST: "ADD_SONGS_TO_PLAYLIST",
  REMOVE_SONG_FROM_PLAY_LIST: "REMOVE_SONG_FROM_PLAY_LIST"
};

export const clearPlaylist = () => ({
  type: PlaylistActionTypes.CLEAR_PLAY_LIST
});

export const addSongsToPlaylist = songs => ({
  type: PlaylistActionTypes.ADD_SONGS_TO_PLAYLIST,
  songs
});

export const removeSongToPlaylist = songId => ({
  type: PlaylistActionTypes.REMOVE_SONG_FROM_PLAY_LIST,
  songId
});
