import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';


export class SideBarContainerz extends PureComponent {
  render() {
    return (<SideBar/>);
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default withRouter(connect(mapStateToProps)(SideBarContainerz));
