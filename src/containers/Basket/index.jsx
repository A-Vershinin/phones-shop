import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Basket from '../../components/Basket';
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

export default withRouter(connect(mapStateToProps, null)(BasketContainer));
