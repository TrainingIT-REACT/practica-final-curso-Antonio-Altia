import { ProfileActionsTypes } from "../actions/ProfileActions";

const initialState = {
  userName: null,
  songsHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ProfileActionsTypes.DO_LOGIN:
      return { ...state, userName: action.name };
    case ProfileActionsTypes.CLOSE_SESSION:
      return { ...state, userName: null };
    case ProfileActionsTypes.ADD_SONGS_TO_HISTORY:
      return {
        ...state,
        songsHistory: [...state.songsHistory, ...action.songs]
      };
    case ProfileActionsTypes.CLEAR_HISTORY:
      return { ...state, songsHistory: [] };
    default:
      return state;
  }
};
