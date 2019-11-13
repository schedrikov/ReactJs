import React from "react";
import {NavLink} from "react-router-dom";
import css from "./NavElement.module.css"

function NavElement(props) {
    return (
        <span className={css.nav_span}><NavLink to={props.url} activeClassName={css.active}>{props.name}</NavLink></span>
    );
}

export default NavElement;