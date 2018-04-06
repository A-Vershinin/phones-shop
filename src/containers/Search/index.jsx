import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from '../../components/Search';

class SearchContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (<Search {...this.props}/>);
  }

}

const mapStateToProps = state => {
  return {

  }
}

const mapStateToDispatch = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(SearchContainer));
