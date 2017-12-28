import React from 'react';

const DonationForm = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          donation description
          <input name="donation_description" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          quantity
          <input name="quantity" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          prepared time
          <input name="prepared_time" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          shelf life
          <input name="shelf_life" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          ingredients
          <input name="ingredients" type="textarea" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          location
          <input name="location" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          photo url
          <input name="photo_url" type="text" onChange={props.getDonation} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="btn btn-lg btn-info" onClick={props.submitForm}>Submit Donation</div>
        </div>
      </div>
    </div>
  )
}

export default DonationForm
