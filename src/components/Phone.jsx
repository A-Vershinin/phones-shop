import React, { PureComponent } from 'react';
import R from 'ramda';

class Phone extends PureComponent {
  renderFields () {
    const {phone} = this.props
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory'
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



  renderSidebar() {
    return (
      <div>Sidebar</div>
    )
  }

  render() {
    const {phone} = this.props;
    // console.log(phone);

    return (
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
