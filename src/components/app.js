import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Asperger's Blog</h1>
        <h2>A blog for Asperger's</h2>

        {moment().format('YYYY-MM-DD HH:mm:ss')}
      </div>
    );
  }
}
