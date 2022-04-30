import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NaviBar from './navigation/navi.js';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PostDetail from './posts/postDetail';
import NoMatch from './pages/noMatch';

export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <NaviBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/posts/:permalink' component={PostDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
