import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phones from '../../components/Phones';

class PhonesContainer extends PureComponent {
  render() {
    return (
      <div>
        <Phones />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // routerLocation: state.location
  };
}

export default withRouter(connect(mapStateToProps)(PhonesContainer));
