import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Phones from '../../components/Phones';
import { fetchPhones }  from '../../actions/phonesAction';

class PhonesContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchPhones();
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <Phones />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   phones: state.phones
// }

const mapStateToDispatch = (dispatch) => {
  return {
    fetchPhones: () => dispatch(fetchPhones()),
  };
}

export default withRouter(connect(null, mapStateToDispatch)(PhonesContainer));
