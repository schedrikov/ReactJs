import React from 'react';
import s from './MainContent.module.css';
import {Route} from 'react-router-dom';
import About from "../Pages/About/About";
import Index from "../Pages/Index/Index";
import Info from "../Pages/Info/Info";

function MainContent() {
    return (
        <main className={s.main_content}>
            <Route path="//" component={Index}/>
            <Route path="/info" component={Info}/>
            <Route path="/about" component={About}/>
        </main>
    );
}

export default MainContent;