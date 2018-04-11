import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';
import R from 'ramda';


class Phones extends PureComponent {
  renderPhone(phone, index) {
    const {addPhoneToBasket} = this.props;
    const numberSymbolsInString = 85;
  	const shortDescription = `${R.take(numberSymbolsInString, phone.description)}...`;

  	return (<div className='col-xs-6 col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
  		<div className='thumbnail'>
  			<img className='img-thumbnail' src={phone.image} alt={phone.name}/>
  			<div className='caption'>
  				<h4 className='pull-right'>${phone.price}</h4>
  				<h4>
  					<Link to={`/phones/${phone.id}`}>{phone.name}</Link>
  				</h4>
  				<p>{shortDescription}</p>
  				<p className='itemButton'>
  					<button className='btn btn-primary' onClick={() => addPhoneToBasket(phone.id)}>Buy Now!</button>
  					<Link to={`/phones/${phone.id}`} className='btn btn-default'>
  						More info
  					</Link>
  				</p>
  			</div>
  		</div>
  	</div>);
  };

  render() {
    const { phones, loadMorePhones } = this.props;
    
    return (
      <PageTemplate>
        <h1>Popular phones</h1>
        <div className='books row'>
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button onClick={loadMorePhones} className='pull-right btn btn-primary'>
             Load More
            </button>
          </div>
        </div>
      </PageTemplate>
    );
  }
}


export default Phones;
