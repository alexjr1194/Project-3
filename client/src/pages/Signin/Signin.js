import React, {Component} from 'react';
import './Signin.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signin extends Component {
  state = {
    role: '',
    username: '',
    charityemail:'',
    password: ''
  }

  componentDidMount() {
    this.displayForm();
  }

  displayForm = () => {
    const role = this.props.match.params.role;
    this.setState({role: role})
    const donorForm = document.getElementById('donorForm');
    const charityForm = document.getElementById('charityForm');
    if(role === "donor") {
      donorForm.style.display = "inline"
      charityForm.style.display = "none"
    }
    if(role === "charity") {
      donorForm.style.display = "none"
      charityForm.style.display = "inline"
    }
  }

  getUser =()=>{
    axios.get(`/api/donor/${this.state.username}`)
      .then(result =>{
        console.log(result);
        if(!result.data[0]){
          this.props.history.push("/")
        }else {
          if(result.data[0].email === this.state.username && result.data[0].password === this.state.password){
            this.props.history.push(`/user/${this.state.username}`)
          }else {
          this.props.history.push("/")
          }
        }

      })
  }

  getCharity=()=>{
    axios.get(`/api/charity/${this.state.charityemail}`)
      .then(result =>{
        console.log(result);
        if(!result.data[0]){
          this.props.history.push("/")
        }else {
          if(result.data[0].email === this.state.charityemail && result.data[0].password === this.state.password){
            this.props.history.push(`/charity/${this.state.charityemail}`)
          }else {
            this.props.history.push("/")
          }
        }

      })
  }

  hanldeInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    }, ()=>console.log(this.state.charityemail))
  }

  render() {
    return(
      <div>
        <div className="donor container-fluid col-8">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h3 className="col-12">{this.state.role} sign in</h3>
            </div>
          </div>
          <form id='donorForm'>

            <div className="row justify-content-center inputRow">
              <div className="inputDiv col-8">
                <input className="col-12" name='username' placeholder='Username (Required)'onChange={this.hanldeInputChange}/>
              </div>
            </div>

            <div className="row justify-content-center inputRow">
              <div className="inputDiv col-8">
                <input className="col-12" name='password' placeholder='Password (Required)' onChange={this.hanldeInputChange}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="homeButton btn btn-sm col-8" onClick={this.getUser}>
                <Link to="#" className="col-12" >Sign In</Link>
              </div>
            </div>
          </form>
          <form id='charityForm'>

            <div className="row justify-content-center inputRow">
              <div className="inputDiv col-8">
                <input className="col-12" name='charityemail' placeholder='Charity email (Required)' onChange={this.hanldeInputChange}/>
              </div>
            </div>

            <div className="row justify-content-center inputRow">
              <div className="inputDiv col-8">
                <input className="col-12" name='password' placeholder='Password (Required)' onChange={this.hanldeInputChange}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="homeButton btn btn-sm col-8" onClick={this.getCharity}>
                <Link to="#" className="col-12">Sign In</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Signin;
