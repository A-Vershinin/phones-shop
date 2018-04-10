import React, { PureComponent } from 'react';

import BasketCartContainer from '../containers/BasketCart/index';
import SearchContainer from '../containers/Search/index';
import CategoriesContainer from '../containers/Categories/index';

class SideBar extends PureComponent {
  render() {
    return (
      <div>
        <BasketCartContainer />
        <SearchContainer />
        <CategoriesContainer/>
      </div>
    );
  }

}

export default SideBar;
