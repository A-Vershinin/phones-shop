import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone';
import { fetchPhoneById } from '../../actions/phonesAction';

class PhoneContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    const { match } = this.props;

    // console.log(this.props.match.params.id)
    return (
      <div>
        <Phone {...this.props}/>
      </div>
    );
  }
}


const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhoneById: (id) => dispatch(fetchPhoneById(id))
  };
};

export default withRouter(connect(null, mapStateToDispatch)(PhoneContainer));
