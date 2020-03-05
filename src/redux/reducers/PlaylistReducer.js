import { PlaylistActionTypes } from "../actions/PlaylistActions";

const initialState = {
  songs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlaylistActionTypes.CLEAR_PLAY_LIST:
      return { songs: [] };
    case PlaylistActionTypes.REMOVE_SONG_FROM_PLAY_LIST:
      const songNewList = state.song.filter(
        song => song.songId != action.songId
      );
      return { songs: songNewList };
    case PlaylistActionTypes.ADD_SONGS_TO_PLAYLIST:
      return { songs: [...state.songs, action.songs] };
    default:
      return state;
  }
};
