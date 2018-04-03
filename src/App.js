import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import NoMatch from './components/NoMatch';

class App extends PureComponent {
  render() {
    return (
      <div>
        	<Route exact path="/" component={Layout} />
      </div>
    );
  }
}

export default App;
