import React from 'react';

export default function(props) {
    return (
        <div>
            <h2>Blog Post for {props.match.params.permalink}</h2>
        </div>
    );
}