import React, { Component } from "react";
import axios from 'axios';

import PostItem from './postItem';

export default class PostHolder extends Component {
    constructor() {
        super()
        
        this.state = {
            isLoading: false,
            dummy: []
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getBlogs = this.getBlogs.bind(this);
      }

    getBlogs() {
        axios.get("http://127.0.0.1:5000/posts")
        .then(response => {
            this.setState({
                dummy: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    postItems() {
        return this.state.dummy.map(item => {
            return <PostItem key={item.id} item={item} />;
        })
    }

    
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount() {
        this.getBlogs();
    }
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div className='postBox'>
                <div className='postButtons'>
                    <button className='btn' onClick={() => this.handleFilter('charmed')}>Charmed</button>
                    <button className='btn' onClick={() => this.handleFilter('strange')}>Strange</button>
                </div>
                <div className='postBoxInner'>
                    {this.postItems()}
                </div>
            </div>
        )
    }
}