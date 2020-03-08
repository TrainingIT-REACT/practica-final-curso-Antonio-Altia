export const PlaylistActionTypes = {
  CLEAR_PLAYLIST: "CLEAR_PLAYLIST",
  ADD_SONGS_TO_PLAYLIST: "ADD_SONGS_TO_PLAYLIST",
  REMOVE_SONG_FROM_PLAYLIST: "REMOVE_SONG_FROM_PLAYLIST",
  GO_TO_SONG: "GO_TO_SONG",
  NEXT_SONG: "NEXT_SONG",
  PREV_SONG: "PREV_SONG"
};

export const clearPlaylist = () => ({
  type: PlaylistActionTypes.CLEAR_PLAYLIST
});

export const addSongsToPlaylist = songs => ({
  type: PlaylistActionTypes.ADD_SONGS_TO_PLAYLIST,
  songs
});

export const removeSongFromPlaylist = removedSongIndex => ({
  type: PlaylistActionTypes.REMOVE_SONG_FROM_PLAYLIST,
  removedSongIndex
});

export const goToSong = songIndex => ({
  type: PlaylistActionTypes.GO_TO_SONG,
  songIndex
});

export const goNextSong = () => ({
  type: PlaylistActionTypes.NEXT_SONG
});

export const goPrevSong = () => ({
  type: PlaylistActionTypes.PREV_SONG
});
