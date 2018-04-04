import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Page extends PureComponent {
  render() {
    return (
      <div>
        <h1>Page Route</h1>
        <Link to='/'>Back to home</Link>
      </div>
    );
  }
}

export default Page;
