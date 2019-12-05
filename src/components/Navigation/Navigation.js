import React from "react";
import css from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

function NavElement(props) {
    return (
        <span><NavLink exact to={props.url} activeClassName={css.active}>{props.name}</NavLink></span>
    );
}

function Navigation(props) {

    let navList = props.state.nav.map(value =>
        <NavElement url={value.url} name={value.name}/>
    );

    return (
        <nav className={css.navigation}>
            {navList}
        </nav>
    );
}

export default Navigation;