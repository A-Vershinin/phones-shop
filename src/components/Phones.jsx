import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';


class Phones extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <h1>Phones components</h1>
        <Link to='/'>Back to home</Link>
      </PageTemplate>
    );
  }

}

export default Phones;
