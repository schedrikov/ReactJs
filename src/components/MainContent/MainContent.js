import React from 'react';
import css from './MainContent.module.css';
import {Route} from 'react-router-dom';
import About from "../Pages/About/About";
import Index from "../Pages/Index/Index";
import Info from "../Pages/Info/Info";
import News from "../Pages/News/News";

function MainContent(props) {
    return (
        <main className={css.main_content}>
            <Route exact path="/" render={() => <Index />} />
            <Route exact path="/info" render={() => <Info />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/news" render={() => <News state={props.state}/>} />
        </main>
    );
}

export default MainContent;