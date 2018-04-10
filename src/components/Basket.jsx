import React, { PureComponent } from 'react';
import R from 'ramda';

class Basket extends PureComponent {
  render() {
    const { totalPrice, phones, removePhoneFromBasket } = this.props;
    const isBasketEmpty = R.isEmpty(phones)
    // console.log(this.props)
    const renderContent = () => {
      return (
        <div>
          {isBasketEmpty && <div>Your shopping cart is empty</div>}
          <div className='table-responsive'>
            <table className='table-bordered table-striped table-condensed cf'>
              <tbody>
              {phones.map((phone, index) => (
                <tr key={index} className='item-checout'>
                  <td className='first-column-checkout'>
                    <img className='img-thumbnail' src={phone.image} alt={phone.name}/>
                  </td>
                  <td>{phone.name}</td>
                  <td>${phone.price}</td>
                  <td>{phone.count}</td>
                  <td><span className='delete-cart' onClick={() => removePhoneFromBasket(phone.id)}/></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {R.not(isBasketEmpty) &&
            <div className='row'>
              <div className='pull-right total-user-checkout'>
                <b>Total:</b>${totalPrice}
              </div>
            </div>
          }
        </div>
      )
    }

    const renderSidebar = () => (
      <div>Sidebar</div>
    )

    return (
      <div className='view-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {renderContent()}
            </div>
            <div className='col-md-3 btn-user-checkout'>
              {renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
