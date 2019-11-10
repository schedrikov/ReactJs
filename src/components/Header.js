import logo from "../logo.png";
import React from "react";
import Navigation from "./Navigation";
import s from "./Header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>
            <Navigation />
        </header>
    );
}

export default Header;