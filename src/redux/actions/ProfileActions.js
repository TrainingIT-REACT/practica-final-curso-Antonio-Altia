export const ProfileActionsTypes = {
  DO_LOGIN: "DO_LOGIN",
  CLOSE_SESSION: "CLOSE_SESSION",
  ADD_SONGS_TO_HISTORY: "ADD_SONGS_TO_HISTORY",
  CLEAR_HISTORY: "CLEAR_HISTORY"
};

export const doLogin = name => ({
  type: ProfileActionsTypes.DO_LOGIN,
  name
});

export const closeSession = () => ({
  type: ProfileActionsTypes.CLOSE_SESSION
});

export const addSongsToHistory = songs => ({
  type: ProfileActionsTypes.ADD_SONGS_TO_HISTORY,
  songs
});

export const clearHistory = () => ({
  type: ProfileActionsTypes.CLEAR_HISTORY
});
