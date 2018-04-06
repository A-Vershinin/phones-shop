import React, { PureComponent } from 'react';
import {  connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from '../../components/Page';

class PageContainer extends PureComponent {
  render() {
    // console.log(this.props);
    return (
     <div>
		 	<Page {...this.props}/>
		 </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    // routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(PageContainer));
