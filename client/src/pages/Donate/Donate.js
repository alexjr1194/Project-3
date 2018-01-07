
import React, {Component} from 'react';
//import Nav from '../../components/Nav';
//import { Input, FormBtn } from "../../components/Form";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

class Donate extends Component {
    state = {
      user: null,
      userId:null,
      donation:{},
      donationId:null,
      todayDate:moment(),
      name: '',
      quantity:'',
      preparedTime:'',
      preparedOn: moment(),
      shelfLife:'',
      shelfLifeUnit:'',
      ingredients:'',
      location:'',
      shouldKnow:'',
      photo:''
    };

  componentDidMount () {
    this.getUser();
  }

  getUser = () =>{
   const user=this.props.match.params.id;
   console.log(user);
   this.setState({user: user}, ()=>console.log(this.state.user));
   axios.get(`/api/donor/${user}`)
     .then((response) => {
       console.log(response)
       const userId = response.data[0]._id;
       this.setState({userId: userId}, ()=>console.log(this.state.userId));
     })
     .catch(err => console.log(err));
  }

  handleChange = (event) => {
    const state = this.state;

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    state.donation[name] = value;
    this.setState(state.donation);
  }

  handleDateChange = (date) => {
    this.setState({
      todayDate: date
    });
  }

  handleMadeDate = (date) => {
    this.setState({preparedOn: date})
  }

  handleSubmit = (event) => {
    alert('We thank you for your support. Your donation has been submitted!');
    event.preventDefault();
  }

  submitForm = (event) => {
    event.preventDefault();
    //alert('We thank you for your support. Your donation has been submitted!');
    const creator = this.state.userId;
    const todayDate = this.state.todayDate;
    const preparedOn = this.state.preparedOn;
    let donation = {_creator: creator, todayDate:todayDate, preparedOn: preparedOn, ...this.state.donation}
    console.log("test",donation);
    axios.post('/api/donation', donation)
      .then((response) => {
        console.log("donation", response.data._id);
        this.setState({donationId:response.data._id});
      })
      .then((response) => {
        this.props.history.push(`/user/${this.state.user}/reciept/${this.state.donationId}`);
      })
      .catch((err)=>console.log(err));
  }

  render() {
    return (

      <div>
        <h1>{this.state.user} make a donation!</h1>
        <form onSubmit={this.submitForm}>

          <label>
            Date:
            <div>
              <DatePicker
                selected={this.state.todayDate}
                onChange={this.handleDateChange}
              />
            </div>
          </label>

          <br/>

          <label>
            What are you donating?:
            <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Quantity!(please specify units):
            <input
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Time Food Prepared:
            <input
              name="preparedTime"
              value={this.state.preparedOn}
              onChange={this.handleChange}
            />
            </label>

            <br/>
            <label>
            Date Food Prepared:
            <div>
              <DatePicker
                selected={this.state.todayDate}
                onChange={this.handleMadeDate}
              />
            </div>

          </label>

          <br/>

          <label>
            Shelf Life! (Please specify units):
            <input
            name="shelfLife"
            type="text"
            value={this.state.shelfLife}
            onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Ingredients:
            <input
            name="ingredients"
            type="text"
            value={this.state.ingredients}
            onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Location:
            <input
            name="location"
            type="text"
            value={this.state.location}
            onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Anything we should know:
            <input
             name="shouldKnow"
             type="text"
             value={this.state.shouldKnow}
             onChange={this.handleChange} />
          </label>

          <br/>

          <label>
            Photo Link:
            <input
            name="photo"
            type="text"
            value={this.state.photo}
            onChange={this.handleChange} />
          </label>

          <br/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Donate;
