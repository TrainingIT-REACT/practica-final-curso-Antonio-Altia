export const PlayerActionTypes = {
  PLAY_SONG: "PLAY_SONG",
  STOP: "STOP",
  PAUSE: "PAUSE",
  NEXT: "NEXT",
  PREV: "PREV",
  ACTIVATE: "ACTIVATE",
  DEACTIVATE: "DEACTIVATE",
  SET_TIME_MARK: "SET_TIME_MARK"
};

export const doLogin = name => ({
  type: PlayerActionTypes.PLAY_SONG,
  name
});

export const playSong = songId => ({
  type: PlayerActionTypes.PLAY_SONG,
  songId
});

export const stopPlayer = () => ({
  type: PlayerActionTypes.STOP
});

export const pausePlayer = () => ({
  type: PlayerActionTypes.PAUSE
});

export const nextSong = () => ({
  type: PlayerActionTypes.NEXT
});

export const prevSong = () => ({
  type: PlayerActionTypes.PREV
});

export const activatePlayer = () => ({
  type: PlayerActionTypes.ACTIVATE
});

export const deactivatePlayer = () => ({
  type: PlayerActionTypes.DEACTIVATE
});

export const setTimeMark = timeMark => ({
  type: PlayerActionTypes.SET_TIME_MARK,
  timeMark
});
