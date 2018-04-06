import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from '../../components/Layout';

class LayoutContainer extends PureComponent {
  render() {
    // console.log(this.props);
    return (
     <div>
				<Layout {...this.props}/>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(LayoutContainer));
