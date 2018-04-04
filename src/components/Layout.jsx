import React, { PureComponent } from 'react';

import PageTemplate from './PageTemplate';

class Layout extends PureComponent {
  render() {
    // const {match} = this.props;
    // console.log(this.props);
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
