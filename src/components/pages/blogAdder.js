import React, { Component } from 'react';
import axios from 'axios';

import BlogSidebarList from '../posts/blogSidebarList';

export default class BlogAdder extends Component {
    constructor() {
        super()

        this.state ={
            fool: []
        };

        this.getBlogs = this.getBlogs.bind(this);
    }

    getBlogs() {
        axios.get("http://127.0.0.1:5000/posts")
        .then(response => {
            this.setState({
                fool: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

        componentDidMount() {
        this.getBlogs();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div className='blogAdderMain'>
                <div className='blogForm'>
                    <h1>Blog Form</h1>
                </div>
                <div className='blogSidebar'>
                    <BlogSidebarList data={this.state.fool} />
                </div>
            </div>
        );
    }
}