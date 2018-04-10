import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import R from 'ramda';
import classNames from 'classnames';


class Categories extends PureComponent {

 renderCategory = (category, index) => {
  /* Добавляем активный класс. Проверяем что activeCategoryId равняется id
  текущей категории и тогда добавляем класс active.*/
   const getActiveState = R.propEq('id', this.props.activeCategoryId);

   const linkClass = classNames({
     'list-group-item': true,
     'active': getActiveState(category)
   });

   return (
     <Link to={`/categories/${category.id}`} className={linkClass} key={index}>
       {category.name}
     </Link>
   )
  }

  render() {
    const { categories, activeCategoryId } = this.props;
    // console.log(this.props)
    // console.log('activeCategoryId', activeCategoryId)



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
