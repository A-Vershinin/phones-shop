import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phones from '../../components/Phones.jsx';
import { fetchPhonesAction, loadMorePhonesAction }  from '../../actions/phonesAction';
import { addPhoneToBasketAction } from '../../actions/basketAction';
import { fetchCategoriesAction } from '../../actions//categoriesAction.js';
import { getPhones } from '../../selectors/selectors';

class PhonesContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }

  render() {
    return (<Phones {...this.props}/>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps),
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhonesAction()),
    fetchCategories: () => dispatch(fetchCategoriesAction()),
    loadMorePhones: () => dispatch(loadMorePhonesAction()),
    addPhoneToBasket: (id) => dispatch(addPhoneToBasketAction(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(PhonesContainer));
