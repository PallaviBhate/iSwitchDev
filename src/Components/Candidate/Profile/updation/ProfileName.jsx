import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

class ProfileName extends Component {

  constructor() {
    super()
    this.state = {
      isProfileNamePopupShow: true
    }
  }

  render() {
    const { isProfileNamePopupShow } = this.state;
    const currentCities = ['Bengaluru', 'Hyderabad', 'Chennai', 'Mumbai', 'Noida', 'Delhi', 'Gurugram', 'Pune', 'Kolkata', 'Ahmedabad']
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="University">First Name</label>
            <input class="form-control" type="text" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="University">Last Name</label>
            <input class="form-control" type="text" placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="University">Job Title</label>
            <input class="form-control" type="text" placeholder="Enter Job Title" />
          </div>
          <div className="form-group">
            <label htmlFor="University">Current Organization</label>
            <input class="form-control" type="text" placeholder="Enter Current Organization" />
          </div>
          <div className="form-group">
            <label htmlFor="University">Mobile Number</label>
            <PhoneInput
              style={{ width: '100%' }}
              country={'in'}
              value={this.state.phone}
              onChange={phone => this.setState({ phone })}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="University">Current Location</label>
            <select id="University" className="form-control">
              {currentCities.map((currentCity, i) => (
                <option key={`currentCity`}>{currentCity}</option>
              ))}
            </select>
          </div>
          <button class="btn lightBlue float-right px-5">Save</button>
        </form>
      </>
    );
  }
}

export default ProfileName