import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import { MONTH_NAMES } from '../../../../Utils/AppConst';

class Employment extends Component {

  constructor() {
    super()
    this.state = {
      value: new Date(),
      onChange: new Date(),
      isCurrentCompany: false

    }

  }

  render() {
    return (
      <>
        <form>
          <div class="mb-4">
            <div className="form-group">
              <label htmlFor="Designation">Designation<span class="required">*</span></label>
              <input class="form-control" type="text" placeholder="Enter Designation" />
            </div>
            <div className="form-group">
              <label htmlFor="Organization">Organization<span class="required">*</span></label>
              <input class="form-control" type="text" placeholder="Enter Organization" />
            </div>
            <div className="form-group">
              <label htmlFor="Organization">Employment Type<span class="required">*</span></label>
              <div class="form-row">
                <div className="col">
                  <select id="University" className="form-control">
                    <option>Permanent</option>
                    <option>Contractual</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="University">Is this your current company?<span class="required">*</span></label>
              <div>
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input mr-2" id="" name="materialExample2" value="yes" onClick={() => this.setState({
                    isCurrentCompany: true
                  })} checked={this.state.isCurrentCompany ? true : false} />
                  <label class="radio-inline form-check-label" for="materialChecked2">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input type="radio" class="form-check-input mr-2" id="" name="materialExample2" value="no" onClick={() => this.setState({
                    isCurrentCompany: false
                  })} checked={!this.state.isCurrentCompany ? true : false} />
                  <label class="radio-inline form-check-label" for="materialChecked2">No</label>
                </div>
              </div>
            </div>
            <label htmlFor="University" class="mt-2">Started working from<span class="required">*</span></label>
            <div className="form-group">
              <div class="form-row">
                <div className="col mr-3">
                  <select id="University" className="form-control">
                    {Array(100).fill().map((_, i) => (
                      <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                      }  </option>
                    ))}
                  </select>
                </div>
                <div className="col ml-3">
                  <select id="University" className="form-control">
                    {MONTH_NAMES.map((monthName, i) => (
                      <option key={`monthName`}>{monthName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {!this.state.isCurrentCompany ? <><label htmlFor="University" class="mt-2">Worked Till<span class="required">*</span></label>
              <div className="form-group">
                <div class="form-row">
                  <div className="col mr-3">
                    <select id="University" className="form-control">
                      {Array(100).fill().map((_, i) => (
                        <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                        }  </option>
                      ))}
                    </select>
                  </div>
                  <div className="col ml-3">
                    <select id="University" className="form-control">
                      {MONTH_NAMES.map((monthName, i) => (
                        <option key={`monthName`}>{monthName}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div></> : null}

            <div className="form-group">
              <label for="validationTextarea">Describe your job profile</label>
              <textarea class="form-control" rows="8" cols="70" maxlength="2000"
                id="validationTextarea"
                placeholder="Enter Your Job Profile Details Here..." required></textarea>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
              <div class="col text-right mt-2 px-0">
                <span class="small-text-light ">4000 Characters Left</span>
              </div>
            </div>
          </div>


          <button class="btn lightBlue float-right px-5">Save</button>
        </form>

      </>
    );
  }
}

export default Employment