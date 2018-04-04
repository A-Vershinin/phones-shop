import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/'>Back to layout</Link>
       </div>
    );
  }
}

export default Home;
