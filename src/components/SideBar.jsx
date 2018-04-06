import React, { PureComponent } from 'react';

import BasketCartContainer from '../containers/BasketCart/index';

class SideBar extends PureComponent {
  render() {
    return (
      <div>
        <BasketCartContainer />
      </div>
    );
  }

}

export default SideBar;
