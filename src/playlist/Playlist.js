import React, { Component } from "react";
import { connect } from "react-redux";
import "./playlist.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayIcon from "@material-ui/icons/PlayArrow";

//Actions
import { playSong } from "../redux/actions/PlayerActions";
import { addSongsToHistory } from "../redux/actions/ProfileActions";
import {
  goToSong,
  removeSongFromPlaylist
} from "../redux/actions/PlaylistActions";

export class Playlist extends Component {
  onClickSong(song, index, e) {
    this.props.goToSong(index);
    this.props.playSong(song);
    this.props.addSongsToHistory([song]);
  }

  onClickDeleteSong(index, e) {
    this.props.removeSongFromPlaylist(index);
    if (this.props.currentSongIndex === index) {
      this.props.playSong(null);
    }
  }

  render() {
    return (
      <Grid container spacing={0}>
        {this.props.songsList.map((song, index) => (
          <Grid key={index} item xs={12}>
            <Card
              className={
                this.props.currentSongIndex === index
                  ? "playlist_song current"
                  : "playlist_song"
              }
            >
              <CardActionArea
                onClick={e => this.onClickSong(song, index, e)}
                component="a"
                href="#"
              >
                <div>
                  <Typography component="h2" variant="h5">
                    {song.name}
                  </Typography>
                </div>
              </CardActionArea>
              <IconButton
                onClick={e => this.onClickDeleteSong(index, e)}
                aria-label="delete"
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={e => this.onClickSong(song, index, e)}
                aria-label="delete"
              >
                <PlayIcon fontSize="large" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  songsList: state.playlist.songs,
  selectedAlbum: state.songs.selectedAlbum,
  currentSong: state.player.song,
  currentSongIndex: state.playlist.currentIndex
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(playSong(song)),
  goToSong: songIndex => dispatch(goToSong(songIndex)),
  removeSongFromPlaylist: songIndex =>
    dispatch(removeSongFromPlaylist(songIndex)),
  addSongsToHistory: songs => dispatch(addSongsToHistory(songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
