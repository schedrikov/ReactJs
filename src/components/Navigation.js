import React from "react";
import s from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={s.navigation}>
            <span><a href="/">Home</a></span>
            <span><a href="/info/">Info</a></span>
            <span><a href="/about/">About</a></span>
        </nav>
    );
}

export default Navigation;