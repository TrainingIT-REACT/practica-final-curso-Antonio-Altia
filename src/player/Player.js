import React, { useRef } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import StopIcon from "@material-ui/icons/StopSharp";
import BackIcon from "@material-ui/icons/SkipPrevious";
import ForwardIcon from "@material-ui/icons/SkipNext";

//Actions
import { goNextSong, goPrevSong } from "../redux/actions/PlaylistActions";
import { playSong } from "../redux/actions/PlayerActions";

function Player({
  playing,
  song,
  timeMark,
  playlistSongs,
  currentPlayListIndex,
  goNextSong,
  goPrevSong,
  playSong
}) {
  const playerRef = useRef(React.createRef());

  const onClickNext = e => {
    goNextSong();
    playSong(playlistSongs[currentPlayListIndex + 1]);
    playerRef.current.currentTime = 0;
  };
  const onClickPrev = e => {
    goPrevSong();
    playSong(playlistSongs[currentPlayListIndex - 1]);
    playerRef.current.currentTime = 0;
  };
  const onClickStop = e => {
    playSong(null);
  };

  return (
    <>
      <span> Reproductor </span>
      <IconButton
        onClick={onClickPrev}
        disabled={!(currentPlayListIndex != null && currentPlayListIndex > 0)}
        aria-label="Cancion previa"
      >
        <BackIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={onClickStop}
        disabled={song == null}
        aria-label="Parar reproduccion"
      >
        <StopIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={onClickNext}
        disabled={
          !(
            currentPlayListIndex != null &&
            currentPlayListIndex < playlistSongs.length - 1
          )
        }
        aria-label="Siguiente cancion"
      >
        <ForwardIcon fontSize="large" />
      </IconButton>
      <br />
      <audio
        ref={playerRef}
        src={song ? song.audio + "?" + currentPlayListIndex : ""}
        controls
        autoPlay={playing}
      />
    </>
  );
}
const mapStateToProps = state => ({
  song: state.player.song,
  playing: state.player.playing,
  timeMark: state.player.timeMark,
  playlistSongs: state.playlist.songs,
  currentPlayListIndex: state.playlist.currentIndex
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song)),
  goNextSong: () => dispatch(goNextSong()),
  goPrevSong: () => dispatch(goPrevSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
