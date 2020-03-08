export const PlayerActionTypes = {
  PLAY_SONG: "PLAY_SONG",
  STOP_PLAYER: "STOP_PLAYER",
  PAUSE_PLAYER: "PAUSE_PLAYER",
  ACTIVATE_PLAYER: "ACTIVATE_PLAYER",
  DEACTIVATE_PLAYER: "DEACTIVATE_PLAYER",
  SET_TIME_MARK: "SET_TIME_MARK"
};

export const doLogin = name => ({
  type: PlayerActionTypes.PLAY_SONG,
  name
});

export const playSong = song => ({
  type: PlayerActionTypes.PLAY_SONG,
  song
});

export const stopPlayer = () => ({
  type: PlayerActionTypes.STOP_PLAYER
});

export const pausePlayer = () => ({
  type: PlayerActionTypes.PAUSE_PLAYER
});

export const activatePlayer = () => ({
  type: PlayerActionTypes.ACTIVATE
});

export const deactivatePlayer = () => ({
  type: PlayerActionTypes.DEACTIVATE_PLAYER
});

export const setTimeMark = timeMark => ({
  type: PlayerActionTypes.SET_TIME_MARK,
  timeMark
});
