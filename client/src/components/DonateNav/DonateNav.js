import React, {Component} from 'react';

class DonateNav extends Component {
  render () {
    return (
      <header className='jumbotron'>
        <h1 className='display-3'>Project-3</h1>
        <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="/donate">Donate</a>
            <a className="nav-item nav-link" href="/view">Donatations</a>
          </div>
        </div>
      </header>

    )
  }
}

export default DonateNav;
