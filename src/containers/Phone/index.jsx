import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone.jsx';
import { fetchPhoneById } from '../../actions/phonesAction';
import { addPhoneToBasketAction } from '../../actions/basketAction';
import { getPhone } from '../../selectors/selectors';

class PhoneContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  render() {
    const { phone } = this.props;
    return (
      <Phone
         {...this.props}
         phone={phone.data}
         pending={phone.pending}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhone(state),
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhoneById: (id) => dispatch(fetchPhoneById(id)),
    addPhoneToBasket: (id) => dispatch(addPhoneToBasketAction(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(PhoneContainer));
