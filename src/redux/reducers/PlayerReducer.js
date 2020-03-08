import { PlayerActionTypes } from "../actions/PlayerActions";

const initialState = {
  active: false,
  timeMark: 0,
  song: null,
  playing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlayerActionTypes.PLAY_SONG:
      return {
        ...state,
        playing: true,
        song: action.song,
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
        ...state,
        playing: false,
        timeMark: action.timeMark
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
