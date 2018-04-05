import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Phones from '../../components/Phones';
import { fetchPhonesAction, loadMorePhonesAction }  from '../../actions/phonesAction';
import { getPhones } from '../../selectors/selectors';

class PhonesContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchPhones();
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <Phones {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    phones: state.phonesPageReducer.ids,
    // phones: [],
    // phones: state.phonesReducer.phones,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhonesAction()),
    loadMorePhones: () => dispatch(loadMorePhonesAction()),
  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(PhonesContainer));
