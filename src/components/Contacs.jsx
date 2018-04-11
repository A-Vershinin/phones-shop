import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';

class Contacs extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <h1>Contacs</h1>
        <Link to='/'>Back to /</Link>
      </PageTemplate>
    );
  }
}

export default Contacs;
