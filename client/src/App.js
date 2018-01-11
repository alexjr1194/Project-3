import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import SignUp from './pages/SignUp';
import SignUpHome from './pages/SignUpHome';
import Signin from './pages/Signin';
import Reciept from './pages/Reciept';
import Donate from './pages/Donate';
import UserDonations from './pages/UserDonations';
import ActiveDonation from './pages/ActiveDonation';
import Charity from './pages/Charity';
import AvailableDonations from './pages/AvailableDonations';
import CharityActive from './pages/CharityActive';
import './App.css';

class App extends Component {

  render () {
    const bgurl = process.env.PUBLIC_URL+"/images/bread.jpg"
    const appStyle = {
         backgroundImage: "url("+bgurl+")",
         minHeight: "100vh",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
      }

    return (
      <div className="app" style={appStyle}>
        <div className="appTitle jumbotron-fluid align-middle">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="title">Project-3</h1>
            </div>
          </div>
        </div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup/' component={SignUpHome}/>
              <Route exact path='/user/:id' component={User}/>
              <Route exact path='/signin/:role' component={Signin}/>
              <Route exact path='/signup/:role' component={SignUp}/>
              <Route exact path='/user/:id/donations' component={Donate}/>
              <Route exact path='/user/:id/reciept/:number' component={Reciept}/>
              <Route exact path='/user/:id/donations/userdonations' component={UserDonations}/>
              <Route exact path='/user/:id/donations/activedonation/:donationid' component={ActiveDonation}/>
              <Route exact path='/charity/:id' component={Charity}/>
              <Route exact path='/charity/:id/availabledonations' component={AvailableDonations}/>
              <Route exact path='/charity/:id/activedonation/:donation' component={CharityActive} />

            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
