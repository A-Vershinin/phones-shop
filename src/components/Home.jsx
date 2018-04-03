import React, { PureComponent } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends PureComponent {
  render() {
    console.log("HOME", this.props.routerLocation);
    return (
      <div>
         <h1>Home</h1>
         <ul>
           <li>
             <Link to="/layout">Page 1</Link>
           </li>
           <li>
             <Link to="/page">Page 2</Link>
           </li>
         </ul>
       </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(Home));
// export default Home;
