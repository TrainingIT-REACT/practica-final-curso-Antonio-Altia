import React, { createRef, useState } from "react";
import { connect } from "react-redux";

//Actions
import {
  doLogin,
  closeSession,
  clearHistory
} from "../redux/actions/ProfileActions";

function Login({ doLogin, closeSession, name, songIds, albums }) {
  const [inputRef] = useState(createRef());

  return name == null ? (
    <>
      <label>Introduzca usuario</label>
      <input ref={inputRef} type="text"></input>
      <button onClick={e => doLogin(inputRef.current.value)}>Login</button>
    </>
  ) : (
    <>
      <p>
        Hola {name}, debes tener las pelotas reventadas de que usemos tus datos
        para vender secretos comerciales al gobierno surcoreano ¿Quieres
        descansar?
      </p>
      <button onClick={e => closeSession()}>
        Cerrar Sesión y liberarse del gran hermano capitalista
      </button>
      <p>
        La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de
        los derechos digitales nos obliga a darte esta opción. Pero solo un
        fucking nerd sin autoestima querría usar esta opción, y todos sabemos
        que no eres un maldito y lamentable looser.
      </p>
      <button onClick={e => clearHistory()}>
        Soy un miedica bua buaaa y quiero borrar mi historial
      </button>
      <ul className="songs_history">
        {[1,2,3].map(songId => {
          return <li className="song_card">{songId}</li>;
        })}
      </ul>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  doLogin: name => dispatch(doLogin(name)),
  closeSession: () => dispatch(closeSession()),
  clearHistory: () => dispatch(clearHistory())
});

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.profile.userName,
    songIds: state.profile.songIdsHistory,
    albums: state.albums
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
