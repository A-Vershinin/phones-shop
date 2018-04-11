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

  /*  добавляет ссылку 'Все товары'', чтобы была возможность перейти на домашнюю страницу.*/
  renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': R.isNil(this.props.activeCategoryId)
    })

    return (
      <Link to='/phones' className={linkClass}>All</Link>
    )
  }

  render() {
    const { categories } = this.props;

    return (
      <div className='well'>
        <h4>Brand</h4>
        <div className='list-group'>
          {this.renderAllCategory()}
          {categories.map((category, index) => this.renderCategory(category, index))}
        </div>
      </div>
    )
  }
}

export default Categories;
