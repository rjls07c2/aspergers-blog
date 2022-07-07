import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <h2>This is the blog.</h2>
                <div>
                    <Link to='/about'>Learn about the Blogger.</Link>
                </div>
            </div>
        );
    }
}