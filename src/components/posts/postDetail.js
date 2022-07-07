import React from 'react';

export default function(props) {
    return (
        <div>
            <h2>Blog Post for {props.match.params.permalink}</h2>
            <h1>{props.match.params.title}</h1>
            <p>{props.match.params.words}</p>
        </div>
    );
}