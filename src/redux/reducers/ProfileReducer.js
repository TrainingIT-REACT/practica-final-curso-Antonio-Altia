import { ProfileActionsTypes } from "../actions/ProfileActions";

const initialState = {
  userName: null,
  songIdsHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ProfileActionsTypes.DO_LOGIN:
      return { ...state, userName: action.name };
    case ProfileActionsTypes.CLOSE_SESSION:
      return { ...state, userName: null };
    case ProfileActionsTypes.ADD_SONGS_TO_HISTORY:
      return { ...state, songIdsHistory: action.songs };
    case ProfileActionsTypes.CLEAR_HISTORY:
      return { ...state, songIdsHistory: action.songs };
    default:
      return state;
  }
};
