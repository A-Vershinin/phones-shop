import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/Home/index';
import Layout from './containers/Layout/index';
import Page from './containers/Page/index';
import Phones from './containers/Phones/index';
import NoMatch from './components/NoMatch';

class App extends PureComponent {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Layout} />
            <Route path='/home' component={Home} />
            <Route path='/page' component={Page} />
            <Route path='/phones' component={Phones} />
            <Route path='*' component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
