import React from "react";
import css from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

function NavElement(props) {
    return (
        <span><NavLink exact to={props.url} activeClassName={css.active}>{props.name}</NavLink></span>
    );
}

function Navigation() {
    return (
        <nav className={css.navigation}>
            <NavElement url='/' name='Home'/>
            <NavElement url='/info/' name='Info'/>
            <NavElement url='/about/' name='About'/>
        </nav>
    );
}

export default Navigation;