
import React, {Component} from 'react';
//import Nav from '../../components/Nav';
//import { Input, FormBtn } from "../../components/Form";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import ImageUploader from 'react-images-uploader';
import {Link} from 'react-router-dom';
import './Donate.css'

class Donate extends Component {
    state = {
      imageFile: null,
      user: null,
      userId:null,
      donationId:null,
      photo:'',
      chooseButton: "Choose An Image",
      donation:{
        todayDate:moment(),
        name: '',
        quantity:'',
        preparedTime:'',
        preparedOn: moment(),
        shelfLife:'',
        shelfLifeUnit:'',
        ingredients:'',
        address:'',
        shouldKnow:''

      },

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
    this.setState(state.donation), console.log(this.state.donation);
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
    this.handleFormSubmit();
    //alert('We thank you for your support. Your donation has been submitted!');
    const creator = this.state.userId;
    const todayDate = this.state.todayDate;
    const preparedOn = this.state.preparedOn;
    const photo = this.state.photo;
    let donation = {_creator: creator, todayDate:todayDate, preparedOn: preparedOn, photo: photo, ...this.state.donation}
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

  handleImageChange = (event) => {
    event.preventDefault();
    let state = this.state;
    state.imageFile = event.target.files[0];
    state.photo = event.target.files[0].name;
    state.chooseButton = event.target.files[0].name;
    this.setState(state,()=>console.log(this.state.photo, this.state.imageFile));
  }

  imageUpload = (file) => {
    const url = '/api/imageupload';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return  axios.post(url, formData,config)
  }

  handleFormSubmit = () => {
    //event.preventDefault() // Stop form submit
    this.imageUpload(this.state.imageFile).then((response)=>{
      console.log(response.data);
    })
  }

  render() {
    return (

      <div className="container-fluid col-8 itemsContainer">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>{this.state.user} make a donation!</h1>
          </div>
        </div>
          <form className="uploadForm">
            <div className="row justify-content-center">
              <div className="text-center col-12">
                <h3>Save an image of your donation</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className=" fileUpload homeButton col-8 text-center">
                <span className="btn btn-lg">{this.state.chooseButton}</span>
                <input name="file" className="btn btn-lg filebtn" type="file" onChange={this.handleImageChange} />
              </div>
            </div>
          </form>
          <br/>

        <form onSubmit={this.submitForm}>
          <div className="row justify-content-center">
              <div className="col-10 inputDiv2">
                <DatePicker
                  className="col-12"
                  selected={this.state.todayDate}
                  onChange={this.handleDateChange}
                  placeholderText="Donation date"
                />
              </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
              <input
              className="col-12"
              placeholder="What are you donating?"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
            placeholder="Quantity!(please specify units):"
            className="col-12"
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
            placeholder="Time Food Prepared:"
              className="col-12"
              name="preparedTime"
              value={this.state.preparedTime}
              onChange={this.handleChange}
            />
            </div>
          </div>

            <div className="row justify-content-center inputRow">
              <div className="inputDiv2 col-10">
              <DatePicker
                className="col-12"
                selected={this.state.todayDate}
                onChange={this.handleMadeDate}
                placeholderText="Donation prepared on"
              />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
            placeholder="Shelf Life"
            className="col-12"
            name="shelfLife"
            type="text"
            value={this.state.shelfLife}
            onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
            placeholder="Ingredients:"
            className="col-12"
            name="ingredients"
            type="text"
            value={this.state.ingredients}
            onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
            placeholder="Donation address"
            className="col-12"
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange} />
            </div>
          </div>

          <div className="row justify-content-center inputRow">
            <div className="inputDiv2 col-10">
            <input
             placeholder="Anything we should know:"
             className="col-12"
             name="shouldKnow"
             type="text"
             value={this.state.shouldKnow}
             onChange={this.handleChange} />
             </div>
           </div>

          <div className="row justify-content-center donateButtonRow">
            <div className="homeButton col-8 btn btn-lg text-center">
              <input type="submit" value="Add Donation" className="col-12 donateButton"/>
            </div>
          </div>
          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg text-center">
              <Link to={"/user/" + this.state.user} className="col-12">Home</Link>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Donate;
