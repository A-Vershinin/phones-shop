import React, { PureComponent } from 'react';

class SideBar extends PureComponent {
  render() {
    return (
      <div className='col-md-3'>
        <div style={{ height: '300px', backgroundColor: "#ccc"}}>
          SideBar какой-то
        </div>
      </div>
    );
  }

}

export default SideBar;
