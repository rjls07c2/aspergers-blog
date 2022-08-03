import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            title: "",
            desc: "",
            category: "",
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("handle change: ", event);
    }

    render() {
        return (
            <div>
                <h1>Here is the Post Form!!</h1>
                
                <form>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Blogpost Title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="desc"
                            placeholder="Blogpost Description"
                            value={this.state.desc}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="cats"
                            placeholder="Catagory Selector"
                            value={this.state.categories}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="theText"
                            placeholder="Blogpost Text Area"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button class="btn" type="submit">Save Post</button>
                    </div>
                </form>
            </div>
        );
    }
}