import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Categories extends PureComponent {

 renderCategory = (category, index) => {
    return (
      <Link to={`/categories/${category.id}`} className='list-group-item' key={index}>
        {category.name}
      </Link>
    )
  }

  render() {
    const { categories } = this.props;
    console.log(categories)
    return (
      <div className='well'>
        <h4>Brand</h4>
        <div className='list-group'>
          {categories.map((category, index) => this.renderCategory(category, index))}
        </div>
      </div>
    )
  }
}

export default Categories;
