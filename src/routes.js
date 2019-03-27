import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

// Routes
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

class Routes extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default Routes;