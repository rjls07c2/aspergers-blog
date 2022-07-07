import axios from 'axios';
import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            passwd: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.post(
            "http://127.0.0.1/sessions",
            {
                client: {
                    username: this.state.username,
                    passwd: this.state.passwd
                }
            }, { withCredentials: true }
        ).then(response => {
            console.log("response", response);
        }).catch(error => {
            console.log("ERROR!! ", error);
        });
    }

    render() {
        return (
            <div className='authBoxVentral'>
                <form id='loginForm' onSubmit={this.handleSubmit}>
                    <label id='forUsername'>Username:</label>
                    <input
                        type='text'
                        name='username'
                        placeholder='Enter User Name'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <label id='forPasswd'>Password:</label>
                    <input
                        type='password'
                        name='passwd'
                        placeholder='Enter Password'
                        value={this.state.passwd}
                        onChange={this.handleChange}
                    />
                    
                    <div>
                        <button className='btn' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}