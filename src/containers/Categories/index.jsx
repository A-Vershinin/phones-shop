import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Categories from '../../components/Categories';
import { getCategories, getActiveCategoryId } from '../../selectors/selectors';

class CategoriesContainer extends PureComponent {
	render() {
		return (<Categories {...this.props}/>);
	}
}

/* вторым параметром в mapStateToProps берём ownProps,
которые содержат в себе id категории из url.*/
function mapStateToProps (state, ownProps) {
  return {
		categories: getCategories(state),
		activeCategoryId: getActiveCategoryId(ownProps),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(CategoriesContainer)
