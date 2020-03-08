import React, { createRef, useState } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Actions
import {
  doLogin,
  closeSession,
  clearHistory
} from "../redux/actions/ProfileActions";

function Login({ doLogin, closeSession, name, songsHistory }) {
  const [inputRef] = useState(createRef());

  return (
    <div className="login">
      {name == null ? (
        <>
          <h2>Login</h2>
          <p>
            Para poder tener acceso a su historial y otras funciones debe
            loguear con su usuario. Gracias a una tecnología a la vanguardia en
            los últimos avances en seguridad e identificación, solo tiene que
            poner su nombre de usuario y el sistema reconocerá si este es el que
            le corresponde realmente. Haciendo uso para ello de un complejo y
            sofisticado sistema de confianza ciega
          </p>
          <TextField
            inputProps={{ "aria-label": "username" }}
            ref={inputRef}
            placeholder="Nombre de Usuario"
            label="Introduzca usuario"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={e =>
              doLogin(inputRef.current.querySelector("input").value)
            }
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <p>
            Hola {name}, debes tener las pelotas reventadas de que usemos tus
            datos para vender secretos comerciales al gobierno chino ¿Pero
            realmente quieres hacer enfadar a una superpotencia comercial?
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={e => closeSession()}
          >
            Cerrar Sesión y liberarse del gran hermano capitalista
          </Button>
          <p>
            La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía
            de los derechos digitales nos obliga a darte esta opción. Pero solo
            un fucking nerd sin autoestima querría usar esta opción, y todos
            sabemos que no eres un maldito y lamentable looser.
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={e => clearHistory()}
          >
            Soy un miedica bua buaaa y quiero borrar mi historial
          </Button>
          <ul className="songs_history">
            {songsHistory.map((song, index) => {
              return (
                <li key={index} className="song_card">
                  {song.name}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
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
    songsHistory: state.profile.songsHistory
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
