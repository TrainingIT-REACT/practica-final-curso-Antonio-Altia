import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import './navbar.css';


class NavBar extends Component {

    render() {
        return (
        <>
            <NavLink className ="nav_button" to="/home">Inicio</NavLink>
            <NavLink className ="nav_button" to="/login">Login</NavLink>
            <NavLink className ="nav_button" to="/albums">Albums</NavLink>
            <NavLink className ="nav_button" to="/profile">Perfil</NavLink>
        </>
        );
    }
}

export default NavBar;