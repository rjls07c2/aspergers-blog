import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NaviBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='naviBarBox'>
                <div className='naviSide'>
                    <NavLink exact to='/' activeClassName='navActive'>Home</NavLink>
                    <NavLink to='/about' activeClassName='navActive'>About</NavLink>
                    <NavLink to='/contact' activeClassName='navActive'>Contact</NavLink>
                    <NavLink to='/blog' activeClassName='navActive'>Blog</NavLink>
                    { false ? <button>AddBlog</button> : null }
                </div>
                <div className='authSide'>
                    <button>Login</button>
                    { false ? <button>Logout</button> : null }
                </div>
            </div>
        )
    }
}