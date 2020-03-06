import React, {  useRef } from 'react';
import { connect } from 'react-redux';



function Player({ songId, songsList, timeMark, playlistSongs }) {
    let playingSong = "";
    let playingIndex = null;
    const ref = useRef({current:null});
    if (ref.current) {
        ref.current.currentTime = timeMark;
    }
    if (songId) {
        //Se toma la canción actual y su indice
        playingSong = songsList.find((song, index) => songId === song.id ? playingIndex = index && true:false).audio;
    }

    return (
        <>
            <button className="player_button back" disabled={(playingIndex != null && playingIndex>0)?false:true}>{`<<`}</button>
            <button className="player_button stop" disabled={songId == null}>Stop</button>
            <button className="player_button forward" disabled={(playingIndex != null && playingIndex<playlistSongs.length-1)?false:true}>{`>>`}</button>
            <audio ref={ref} src={playingSong} controls />
        </>
    );
}
const mapStateToProps = state => ({
    songId: state.player.songId,
    timeMark: state.player.timeMark,
    songsList: state.albums.songsList,
    // playlistSongs: state.playlist.songs,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);