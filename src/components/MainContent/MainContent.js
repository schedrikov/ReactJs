import React from 'react';
import css from './MainContent.module.css';
import {Route} from 'react-router-dom';
import About from "../Pages/About/About";
import Index from "../Pages/Index/Index";
import Info from "../Pages/Info/Info";

function MainContent() {
    return (
        <main className={css.main_content}>
            <Route exact path="/" render={() => <Index />} />
            <Route exact path="/info" render={() => <Info />} />
            <Route exact path="/about" render={() => <About />} />
        </main>
    );
}

export default MainContent;