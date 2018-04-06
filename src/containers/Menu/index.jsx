import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';

class MenuContainer extends PureComponent {

  render() {
    return (
      <div>
        <Menu {...this.props}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

export default withRouter(connect(mapStateToProps)(MenuContainer));
