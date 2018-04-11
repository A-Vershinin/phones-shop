import React, { PureComponent } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// import Home from './containers/Home/index';
import Layout from './containers/Layout/index';
import Contacs from './components/Contacs';
import Phones from './containers/Phones/index';
import Phone from './containers/Phone/index';
import Basket from './containers/Basket/index';
import NoMatch from './components/NoMatch';

class App extends PureComponent {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Layout} />
            <Route path='/categories/:id' component={Phones} />
            <Route exact path='/phones' component={Phones} />
            <Route path='/phones/:id' component={Phone} />
            <Route path='/contacs' component={Contacs} />
            <Route path='/basket' component={Basket} />
            <Route path='*' component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
