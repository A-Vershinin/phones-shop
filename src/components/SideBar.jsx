import React, { PureComponent } from 'react';

import BasketCartContainer from '../containers/BasketCart/index';
import SearchContainer from '../containers/Search/index';


class SideBar extends PureComponent {
  render() {
    return (
      <div>
        <BasketCartContainer />
        <SearchContainer />
      </div>
    );
  }

}

export default SideBar;
