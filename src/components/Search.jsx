import React, { PureComponent } from 'react';

class Search extends PureComponent {
  render () {
    const { handleSubmit, handleChange } = this.props;
    return (
      <div className='well blosd'>
        <h3 className='lead'>Quick shop</h3>
        <div className='input-group'>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type='text'
              className='form-control'
            />
          </form>
          <span className='input-group-btn'>
          <button className='btn btn-default'>
            <span className='glyphicon glyphicon-search'/>
          </button>
        </span>
        </div>
      </div>
    )
  }
}

export default Search;
