import React, { PureComponent } from 'react';

import PageTemplate from './PageTemplate';

class Layout extends PureComponent {
  render() {
    return (
      <div className='containe'>
        <div className='row'>
          <PageTemplate/>
        </div>
      </div>
    );
  }
}

export default Layout;
