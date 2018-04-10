import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BasketCart from '../../components/BasketCart';
import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors/selectors';

class BasketCartContainer extends PureComponent {
  render() {
    return (<BasketCart {...this.props}/>);
  }
}

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
}

export default withRouter(connect(mapStateToProps, null)(BasketCartContainer));
