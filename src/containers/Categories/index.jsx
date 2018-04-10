import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Categories from '../../components/Categories';
import { getCategories } from '../../selectors/selectors';

class CategoriesContainer extends PureComponent {
	render() {
		return (<Categories {...this.props}/>);
	}
}

/* withRouter дает нам возможность вторым параметром в mapStateToProps получить ownProps,
которая содержит в себе id категории из url.*/

const mapStateToProps = (state) => {
	// console.log(ownProps)
  return {
		categories: getCategories(state),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(CategoriesContainer)
