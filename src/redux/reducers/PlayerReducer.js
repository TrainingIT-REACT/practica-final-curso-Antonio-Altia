import { PlayerActionTypes } from "../actions/PlayerActions";

const initialState = {
  active: false,
  timeMark: 0,
  songId: null,
  playing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlayerActionTypes.PLAY_SONG:
      return {
        ...state,
        playing: true,
        songId: action.songId,
        timeMark: 0
      };
    case PlayerActionTypes.STOP:
      return {
        ...state,
        playing: false,
        timeMark: 0
      };
    case PlayerActionTypes.PAUSE:
      return {
        ...state
      };
    case PlayerActionTypes.NEXT:
      return {
        ...state
      };
    case PlayerActionTypes.PREV:
      return {
        ...state
      };
    case PlayerActionTypes.ACTIVATE:
      return {
        ...state,
        active: true
      };
    case PlayerActionTypes.DEACTIVATE:
      return {
        ...state,
        active: false
      };
    case PlayerActionTypes.SET_TIME_MARK:
      return {
        ...state,
        timeMark: action.timeMark
      };
    default:
      return state;
  }
};
