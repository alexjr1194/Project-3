import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Reciept from './pages/Reciept';
import Donate from './pages/Donate';
import UserDonations from './pages/UserDonations';
import ActiveDonation from './pages/ActiveDonation';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:id' component={User}/>
            <Route exact path='/user/:id/donations' component={Donate}/>
            <Route exact path='/user/:id/reciept/:number' component={Reciept}/>
            <Route exact path='/user/:id/donations/userdonations' component={UserDonations}/>
            <Route exact path='/user/:id/donations/activedonation/:donationid' component={ActiveDonation}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
