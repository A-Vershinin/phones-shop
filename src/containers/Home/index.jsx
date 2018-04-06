import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../components/Home';

class HomeContainer extends PureComponent {
  render() {
    return (
     <div>
		 		<Home {...this.props}/>
		 </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(HomeContainer));
