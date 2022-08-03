import React, { Component } from 'react';

export default class PostDetail extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     id : ""
        // };
    }
    render() {
        return (
            <div>
                <h2>Blog Post for {props.match.params.id}</h2>
                <h1>{props.match.params.title}</h1>
                <p>{props.match.params.text}</p>
            </div>
        );
    }
}