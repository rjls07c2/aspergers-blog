import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NaviBar from './navigation/navi.js';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogAdder from './pages/blogAdder.js';
import PostDetail from './posts/postDetail';
import Auth from './pages/auth';
import NoMatch from './pages/noMatch';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <NaviBar />
            <Switch>
              <Route exact path='/' component={Home} />
              
              <Route path='/0832701'
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/blogAdder' component={BlogAdder} />
              <Route exact path='/posts/:permalink' component={PostDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
