import React, { Component } from 'react';

import Login from '../auth/login';

export default class Auth extends Component {
    render() {
        return (
            <div className='authBox'>
                <div className='authBoxDorsal'>
                    <h1>Login To SpergBlog</h1>
                </div>
                <Login />
            </div>
        );
    }
}