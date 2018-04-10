import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Basket from '../../components/Basket';
import { removePhoneFromBasket, basketCheckout, cleanBasket } from '../../actions/basketAction';
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors/selectors';


class BasketContainer extends PureComponent {
  render() {
    return (<Basket {...this.props}/>);
  }
}

const mapStateToProps = state => {
  return {
    totalPrice: getTotalBasketPrice(state),
    phones: getBasketPhonesWithCount(state),
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    removePhoneFromBasket: (id) => dispatch(removePhoneFromBasket(id)),
    basketCheckout: (phones) => dispatch(basketCheckout(phones)),
    cleanBasket: () => dispatch(cleanBasket())
  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(BasketContainer));
