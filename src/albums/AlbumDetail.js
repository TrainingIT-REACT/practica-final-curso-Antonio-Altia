import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/styles";

//Actions
import {
  loadSongsByAlbum,
  loadAlbumDetail
} from "../redux/actions/SongsActions";
import { addSongsToPlaylist } from "../redux/actions/PlaylistActions";
import { playSong } from "../redux/actions/PlayerActions";

const styles = theme => ({
  card: {
    color: "white",
    width: "98%",
    borderRadius: "16px", // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    background:
      "linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)"
  }
});
export class AlbumDetail extends Component {
  constructor(props) {
    super(props);
    this.queryParamAlbumId = new URLSearchParams(
      this.props.history.location.search
    ).get("album_id");
  }

  componentDidMount() {
    this.props.loadAlbumDetail(this.queryParamAlbumId);
    this.props.loadSongsByAlbum(this.queryParamAlbumId);
  }

  onClickSong(song, e) {
    if (this.props.playlistSongs.length === 0) {
      this.props.playSong(song);
    }
    this.props.addSongsToPlaylist(song);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="album_detail">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {this.props.selectedAlbum
                    ? this.props.selectedAlbum.name
                    : "Cargando"}
                </Typography>
                <Typography variant="overline">
                  {this.props.selectedAlbum
                    ? this.props.selectedAlbum.artist
                    : ""}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {this.props.songsList.map((song, index) => (
            <Grid key={index} item xs={11} md={6}>
              <CardActionArea component="a" href="#">
                <Card onClick={e => this.onClickSong(song, e)}>
                  <div>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {song.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Añadir a la lista...
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedAlbum: state.songs.selectedAlbum,
  songsList: state.songs.songsList,
  playlistSongs: state.playlist.songs
});

const mapDispatchToProps = dispatch => ({
  loadAlbumDetail: albumId => dispatch(loadAlbumDetail(albumId)),
  loadSongsByAlbum: album => dispatch(loadSongsByAlbum(album)),
  addSongsToPlaylist: songs => dispatch(addSongsToPlaylist(songs)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AlbumDetail));
