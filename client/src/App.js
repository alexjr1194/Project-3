import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:id' component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
