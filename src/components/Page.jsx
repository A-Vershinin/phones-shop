import React, { PureComponent } from "react";
import {  connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Page extends PureComponent {
  render() {
    console.log("Page Route", this.props.routerLocation);
    return (
      <div>
        <h1>Page Route</h1>
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

export default withRouter(connect(mapStateToProps)(Page));
// export default Page;
