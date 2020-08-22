import React from "react";
import {NavLink} from "react-router-dom";
import css from "./News.module.css";
import img from '../../../img/news.jpg';

function NewsElement(props) {
    return (
        <div className={css.item}>
            <div className={css.image}>
                <img src={img} alt={props.name} />
            </div>
            <div className={css.link}>
                <NavLink exact to={props.url}>{props.name}</NavLink>
            </div>
        </div>
    );
}
/*{window.location.origin + props.image}*/
function News(props) {
    let newsList = props.state.news.map(value =>
        <NewsElement url={value.url} name={value.name} image={value.image}/>
    );

    return (
        <div className={css.news}>
            <h1>News</h1>
            <div className={css.wrap}>
            {newsList}
            </div>
        </div>
    );
}

export default News;