import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { loadAlbums } from "../redux/actions/AlbumsActions";
import { selectAlbum } from "../redux/actions/SongsActions";

const styles = theme => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    borderRadius: 0,
    position: "relative"
  },
  content: {
    padding: 24
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "#000",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12
  },
  img: {
    width: "100%",
    height: "300px"
  },
  title: {
    color: "#000",
    letterSpacing: "2px"
  }
});

class Albums extends Component {
  constructor(props) {
    super(props);
    this.loadAlbums = this.props.loadAlbums.bind(this);
    this.state = { reditect: false };
  }

  componentDidMount() {
    this.loadAlbums();
  }

  selectAlbum(album) {
    this.setState({ selectedAlbum: album, redirect: true });
    this.props.selectAlbum(album);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        {/*Navegación de la pagina mediante redirect*/}
        {this.state.redirect ? (
          <Redirect
            to={"/albumDetail?album_id=" + this.state.selectedAlbum.id}
          />
        ) : null}
        {/*Vista de albums*/}
        {this.props.albumsList != null ? (
          <Grid container spacing={3}>
            {this.props.albumsList.map((album, index) => (
              <Grid key={index} item xs={3}>
                <Card
                  onClick={e => this.selectAlbum(album)}
                  className={classes.root}
                >
                  <CardMedia className={classes.img} image={album.cover} />
                  <CardActionArea>
                    <CardContent className={classes.content}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        maxHeight={360}
                        color={"common.white"}
                        textAlign={"center"}
                      >
                        <h1 className={classes.title}>{album.name}</h1>
                      </Box>
                      <Typography className={classes.cta} variant={"overline"}>
                        {album.artist}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <span> Cargando esperate un poco</span>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  albumsList: state.albums.albumsList
});

const mapDispatchToProps = dispatch => ({
  loadAlbums: () => dispatch(loadAlbums()),
  selectAlbum: album => dispatch(selectAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Albums));
