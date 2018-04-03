import React, { PureComponent } from 'react';
import {  connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Layout extends PureComponent {
	render() {
    console.log("Layout Route", this.props.routerLocation);
    return (
      <div>
        <h1>Layout Route</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
// export default Layout;
