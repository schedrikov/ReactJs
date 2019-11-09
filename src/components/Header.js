import logo from "../logo.png";
import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="app-header">
            <div className="app-logo">
                <img src={logo} alt="logo" />
            </div>
            <Navigation />
        </header>
    );
}

export default Header;