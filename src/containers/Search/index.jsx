import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchPhoneAction } from '../../actions/searchAction';

import Search from '../../components/Search';

class SearchContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (<Search {...this.props}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPhone: (value) => dispatch(searchPhoneAction(value)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchContainer));
