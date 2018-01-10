import React, {Component} from 'react';
import Nav from '../../components/Nav';
import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    username: '',
    password: ''
  }

  hanldeInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            {
              /* About me div */
            }
            <div className='col-sm-3'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h1>About</h1>
                  <div id='about'>
                    <p>
                    Te nisi multos minim senserit, laboris hic elit voluptate te quo vidisse
                    arbitrantur, malis non ita export voluptate. Quorum deserunt appellat in duis ad
                    fabulas, eram voluptate eu expetendis, a elit multos qui litteris do ea
                    quibusdam consectetur ita incididunt labore nostrud, singulis elit incididunt,
                    offendit o amet. Quibusdam est veniam.Non ubi firmissimum, quis est voluptate,
                    eu summis quem ad fabulas ad hic enim incurreret. Singulis ex dolor, in est
                    dolor tamen ipsum quo ab dolore comprehenderit, illum fabulas exercitation,
                    incididunt quis irure incurreret enim ad sed fugiat incurreret, ullamco malis o
                    fabulas reprehenderit, ipsum mandaremus coniunctione. Cillum iudicem non
                    exercitation, eu duis litteris offendit, non sint offendit cernantur, ut noster
                    quamquam iudicem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-5'></div>

            <div className='col-sm-4'>
              <div className='row'>

                <div className='col-sm-6'>
                  <form method='post' action='/api/login'>
                    <h1>LogIn: </h1>
                    <label for='username'>Username: </label>
                    <Input
                      name='username'
                      placeholder='Username (Required)'
                    />
                    <label for='password'>Password: </label>
                    <Input
                      name='password'
                      placeholder='Password (Required)'
                    />

                    <FormBtn>Sign In</FormBtn>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
