import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';

class Home extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <h1>Home page</h1>
        <Link to='/'>Back to /</Link>
      </PageTemplate>
    );
  }
}

export default Home;
