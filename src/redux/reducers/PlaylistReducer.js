import { PlaylistActionTypes } from "../actions/PlaylistActions";

const initialState = {
  songs: [],
  currentIndex: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlaylistActionTypes.CLEAR_PLAY_LIST:
      return { songs: [], currentIndex: null };
    case PlaylistActionTypes.REMOVE_SONG_FROM_PLAYLIST:
      let newIndex = state.currentIndex;
      const songNewList = state.songs.filter(
        (song, index) => index !== action.removedSongIndex
      );
      if (songNewList.length === 0) {
        newIndex = null;
      } else {
        if (action.removedSongIndex <= state.currentIndex) {
          newIndex--;
        }
      }
      return { songs: songNewList, currentIndex: newIndex };
    case PlaylistActionTypes.ADD_SONGS_TO_PLAYLIST:
      if (state.songs.length === 0) {
        return { songs: [...state.songs, action.songs], currentIndex: 0 };
      } else {
        return { ...state, songs: [...state.songs, action.songs] };
      }

    case PlaylistActionTypes.NEXT_SONG:
      if (state.currentIndex < state.songs.length - 1) {
        return {
          ...state,
          songs: [...state.songs],
          currentIndex: state.currentIndex + 1
        };
      } else {
        return state;
      }
    case PlaylistActionTypes.PREV_SONG:
      if (state.currentIndex > 0) {
        return {
          ...state,
          songs: [...state.songs],
          currentIndex: state.currentIndex - 1
        };
      } else {
        return state;
      }
    case PlaylistActionTypes.GO_TO_SONG:
      return {
        ...state,
        songs: [...state.songs],
        currentIndex: action.songIndex
      };
    default:
      return state;
  }
};
