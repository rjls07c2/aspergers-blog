import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {

    const { id, title, desc, cats, theText } = props.item;
    return (
        <div className='postItemSep'>
            <Link to={`/posts/${id}`}>{title}</Link>
            <h4>{desc}</h4>
        </div>
    )
}