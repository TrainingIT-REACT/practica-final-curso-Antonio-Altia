import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { loadAlbums } from "../redux/actions/AlbumsActions";

class Albums extends Component {
  constructor(props) {
    super(props);

    this.loadAlbums = this.props.loadAlbums.bind(this);
  }

  componentDidMount() {
    console.log("albums did mount");
    this.loadAlbums();
  }

  render() {
    return (
      <>
        {this.props.albumsList != null ? (
          <ul>
            {this.props.albumsList.map(album => (
              <li>{album.name}</li>
            ))}
          </ul>
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
  loadAlbums: () => dispatch(loadAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
