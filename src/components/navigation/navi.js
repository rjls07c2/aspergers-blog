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
                    <div className='naviLink'>
                        <NavLink exact to='/' activeClassName='naviActive'>Home</NavLink>
                    </div>
                    <div className='naviLink'>
                        <NavLink to='/about' activeClassName='naviActive'>About</NavLink>
                    </div>
                    <div className='naviLink'>
                        <NavLink to='/contact' activeClassName='naviActive'>Contact</NavLink>
                    </div>
                    <div className='naviLink'>
                        <NavLink to='/blog' activeClassName='naviActive'>Blog</NavLink>
                    </div>
                    <div className='naviLink'>
                       <NavLink to='/blogAdder' activeClassName='naviActive'>Blog Adder</NavLink>
                    </div>
                    
                </div>
                <div className='authSide'>
                    <div className='theBlogger'>
                        Ryan J. Southard
                    </div>
                    { false ? <button>Logout</button> : null }
                </div>
            </div>
        )
    }
}