import React, { Component } from 'react';
import axios from 'axios';

import PostForm from '../posts/postForm';
import BlogSidebarList from '../posts/blogSidebarList';
import PostDetail from '../posts/postDetail';

export default class BlogAdder extends Component {
    constructor() {
        super()

        this.state ={
            fool: []
        };

        this.getBlogs = this.getBlogs.bind(this);

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(blogItem) {
        // TODO
        // update state
        // add item to list
    }

    handleFormSubmissionError(error) {
        console.log("FORM SUBMISSION ERROR!: ", error);
    }

    getBlogs() {
        axios.get("http://127.0.0.1:5000/posts")
        .then(response => {
            this.setState({
                isLoading: false,
                fool: response.data //THIS is what needs expanding
            });
            console.log(this.state.fool);
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
        <PostDetail
            props = {this.props}
        />
        return (
            <div className='blogAdderMain'>
                <div className='blogForm'>
                    <PostForm
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>
                <div className='blogSidebar'>
                    <BlogSidebarList data={this.state.fool} />
                </div>
            </div>
        );
    }
}