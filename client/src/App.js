import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Reciept from './pages/Reciept'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:id' component={User}/>
            <Route exact path='/user/:id/reciept/:number' component={Reciept}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
