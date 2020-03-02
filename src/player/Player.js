import React, { Component, Fragment } from 'react';



class Player extends Component {

    render() {
        return (
            <>
            <button className="player_button back">atras</button>
            <button className="player_button play">play/stop</button>
            <button className="player_button forward">adelante</button>
            <div className="progres_bar_envelope"><div className="progress_bar"></div></div>
            </>
        );
    }
}

export default Player;