import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone';
import { fetchPhoneById } from '../../actions/phonesAction';
import { addPhoneToBasketAction } from '../../actions/basketAction';
import { getPhoneById } from '../../selectors/selectors';

class PhoneContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <Phone {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePageReducer.id),
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhoneById: (id) => dispatch(fetchPhoneById(id)),
    addPhoneToBasket: (id) => dispatch(addPhoneToBasketAction(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(PhoneContainer));
