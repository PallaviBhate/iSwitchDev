import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'

class Certification extends Component {

  constructor() {
    super()
    this.state = {
      isCertificationPopupShow: true,
      isExpirationDate: true
    }
  }

  render() {
    const { isCertificationPopupShow } = this.state;
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return (
      <>
        <form>
          <div class="mb-4">
            <div className="form-group">
              <label htmlFor="University">Certification Name</label>
              <input class="form-control" type="text" placeholder="Enter Certification Name" />
            </div>
            <div className="form-group">
              <label htmlFor="University">Issuing Organization</label>
              <input class="form-control" type="text" placeholder="Enter Issuing Organization" />
            </div>
            <div class="custom-control custom-checkbox mr-sm-2">
              <input type="checkbox" class="custom-control-input" id="customControlAutosizing" onChange={() => this.setState({
                isExpirationDate: !this.state.isExpirationDate
              })} />
              <label class="custom-control-label" for="customControlAutosizing">This credentials does not expire</label>
            </div>
            <label htmlFor="University" class="mt-2">Issue Date</label>
            <div className="form-group">
              <div class="form-row">
                <div className="col mr-3">
                  <select id="University" className="form-control">
                    {Array(50).fill().map((_, i) => (
                      <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                    ))}
                  </select>
                </div>
                <div className="col ml-3">
                  <select id="University" className="form-control">
                    {monthNames.map((monthName, i) => (
                      <option key={`monthName`}>{monthName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {this.state.isExpirationDate ? <div> <label htmlFor="University">Expiration Date</label>
              <div className="form-group">
                <div class="form-row">
                  <div className="col mr-3">
                    <select id="University" className="form-control">
                      {Array(100).fill().map((_, i) => (
                        <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) + 50) - i
                        }  </option>
                      ))}
                    </select>
                  </div>
                  <div className="col ml-3">
                    <select id="University" className="form-control">
                      {monthNames.map((monthName, i) => (
                        <option key={`monthName`}>{monthName}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div></div> : <div class="col text-right mt-2 px-0">
              <span class="small-text-light ">This certification does not expire</span>
            </div>}
            <div className="form-group">
              <label htmlFor="University">Credential ID</label>
              <input class="form-control" type="text" placeholder="Enter Credential ID" />
            </div>
            <div className="form-group">
              <label htmlFor="University">Credential URL</label>
              <input class="form-control" type="text" placeholder="Enter Credential URL" />
            </div>
          </div>
          <button class="btn lightBlue float-right px-5">Save</button>
        </form>

      </>
    );
  }
}

export default Certification