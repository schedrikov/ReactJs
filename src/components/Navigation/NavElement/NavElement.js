import React from "react";
import {NavLink} from "react-router-dom";

function NavElement(props) {
    return (
        <span><NavLink to={props.url}>{props.name}</NavLink></span>
    );
}

export default NavElement;