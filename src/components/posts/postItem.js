import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {

    const { id, title, words } = props.item;
    return (
        <div className='postItemSep'>
            <Link to={`/posts/${id}`}>{title}</Link>
            <h4>{words}</h4>
        </div>
    )
}