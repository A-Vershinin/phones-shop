import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import R from 'ramda';

import BasketCartContainer from '../containers/BasketCart';

class Phone extends PureComponent {
  renderFields () {
    const {phone} = this.props
    const columnFields = R.compose(
      R.toPairs,
      R.pick(['cpu', 'camera', 'size', 'weight',
        'display', 'battery', 'memory'
      ])
    )(phone)

    return columnFields.map(([key, value]) => (
      <div className='column' key={key}>
        <div className='ab-details-title'>
          <p>{key}</p>
        </div>
        <div className='ab-details-info'>
          {value}
        </div>
      </div>
    ))
  }


  renderContent () {
    return (
      <div className='thumbnail'>
        <div className='row'>
          <div className='col-md-6'>
            <img className='img-thumbnail' src={this.props.phone.image}  alt={this.props.phone.name}/>
          </div>
          <div className='col-md-6'>
            {this.renderFields()}
          </div>
        </div>
        <div className='caption-full'>
          <h4 className='pull-right'>${this.props.phone.price}</h4>
          <h4>{this.props.phone.name}</h4>
          <p>{this.props.phone.description}</p>
        </div>
      </div>
    )
  }

  renderSidebar () {
    const {phone, addPhoneToBasket} = this.props
    return (
      <div>
        <p className='lead'>Quick shop</p>
        <BasketCartContainer />
        <div className='form-group'>
          <h1>{phone.name}</h1>
          <h2>${phone.price}</h2>
        </div>
        <Link to='/phones' className='btn btn-info btn-block'>Back to store</Link>
        <button type='button' className='btn btn-success btn-block' onClick={() => addPhoneToBasket(phone.id)}>
          Add to cart
        </button>
      </div>
    )
  }

  render() {
    const {phone, pending} = this.props;
    // console.log(phone);

    return pending ? (<div>Loading...</div>) : (
      <div className='view-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {phone && this.renderContent()}
            </div>
            <div className='col-md-3'>
              {phone && this.renderSidebar()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Phone;
