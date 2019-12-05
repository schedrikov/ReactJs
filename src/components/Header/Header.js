import logo from "../../logo.png";
import React from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

function Header(props) {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt="logo" />
            </div>
            <Navigation state={props.state}/>
        </header>
    );
}

export default Header;