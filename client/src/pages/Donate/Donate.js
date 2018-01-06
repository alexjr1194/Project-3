import React, {Component} from 'react';
import Nav from '../../components/Nav';
import { Input, FormBtn } from "../../components/Form";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayDate:moment(),
      name: '',
      quantity:'',
      preparedOn:moment(),
      shelfLife:'',
      shelfLifeUnit:'',
      ingredients:'',
      location:'',
      shouldKnow:'',
      photo:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? taget.checked : taget.va;ue;
    const name = target.name;

    this.setState({
      [name]: value
      // value: event.target.value});
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    alert('We thank you for your support. Your donation has been submitted!');
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
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
          name="preparedOn"
          <div>
            <DatePicker
              selected={this.state.todayDate}
              onChange={this.handleDateChange}
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
        // no break here. It specifies units for value above
        // <label>
        //   <select
        //   name="shelfLifeUnit"
        //   value={this.state.shelfLifeUnit}
        //   onChange={this.handleChange}>
        //     <option value="minutes">Minutes</option>
        //     <option value="hours">Hours</option>
        //     <option value="days">Days</option>
        //     <option value="weeks">Weeks</option>
        //   </select>
        // </label>
        
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

        <input type="submit" value="Submit" />
      </form>
    );
  }
}