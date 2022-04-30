import React, { Component } from "react";

import PostItem from './postItem';

export default class PostHolder extends Component {
    constructor() {
        super()
        
        this.state = {
            pageTitle: 'Suborbital Eccentricity',
            isLoading: false,
            data: [
                { partner: 'Dewey', category: 'charmed', permalink: 'Dewey'},
                { partner: 'Screwem', category: 'strange', permalink: 'Screwem' },
                { partner: 'Howe', category: 'charmed', permalink: 'Howe' }
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
      }

    postItems() {
        return this.state.data.map(item => {
            return <PostItem title={item.partner} url={'google.com'} permalink={item.permalink}/>;
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Brachistochrone!"
        });
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.postItems()}

                <hr />
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
                <button onClick={() => this.handleFilter('charmed')}>Charmed</button>
                <button onClick={() => this.handleFilter('strange')}>Strange</button>
            </div>
        )
    }
}