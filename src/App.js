import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Page from './components/Page';
import NoMatch from './components/NoMatch';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/layout" component={Layout} />
          <Route path="/page" component={Page} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
