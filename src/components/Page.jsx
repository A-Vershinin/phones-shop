import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import PageTemplate from './PageTemplate';

class Page extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <h1>Page Route</h1>
        <Link to='/'>Back to home</Link>

      </PageTemplate>
    );
  }
}

export default Page;
