import React, { PureComponent } from 'react';
import {Link } from 'react-router-dom';

class Layout extends PureComponent {
  render() {
    return (
      <div>
        <h1>Layout</h1>
        <ul>
          <li>
            <Link to='/home'>Home page</Link>
          </li>
          <li>
            <Link to='/page'>Page 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Layout;
