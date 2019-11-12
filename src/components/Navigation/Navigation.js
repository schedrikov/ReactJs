import React from "react";
import NavElement from "./NavElement/NavElement";
import s from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={s.navigation}>
            <NavElement url='/' name='Home'/>
            <NavElement url='/info/' name='Info'/>
            <NavElement url='/about/' name='About'/>
        </nav>
    );
}

export default Navigation;