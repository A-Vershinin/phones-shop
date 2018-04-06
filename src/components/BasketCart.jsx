import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


class BasketCart extends PureComponent {
  render() {
    const {totalBasketCount, totalPrice} = this.props;
    // console.log('BasketCart', totalBasketCount, totalPrice)
    return (
      <div className='cart'>
        <div className='dropdown'>
          <Link to='/basket' id='dLabel' className='btn btn-inverse btn-block btn-lg'>
            <i className='fa fa-fa-shopping-cart' />
            <span>{totalBasketCount} item(s) - ${totalPrice}</span>
          </Link>
        </div>
      </div>
    );
  }

}

export default BasketCart;
