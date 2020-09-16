import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'

class Skill extends Component {

  constructor() {
    super()
    this.state = {
      isSkillPopupShow: true
    }
  }

  render() {
    const { isSkillPopupShow } = this.state;
    return (
      <>
        <form>
          <div class="mb-4">
            <div className="form-group">
              <label htmlFor="University">Skill</label>
              <input class="form-control" type="text" placeholder="Enter Skill" />
            </div>
            <div className="form-group">
              <label htmlFor="University">Version</label>
              <input class="form-control" type="text" placeholder="Enter Version" />
            </div>
            <label htmlFor="University">Experience</label>
            <div class="form-group">
              <div class="form-row">
                <div className="col mr-3">
                  <select id="University" className="form-control">
                    {Array(31).fill().map((_, i) => (
                      <option key={`${i}_years`}>{i} {i === 1 ? 'Year' : 'Years'} </option>
                    ))}
                  </select>
                </div>
                <div className="col ml-3">
                  <select id="University" className="form-control">
                    {Array(12).fill().map((_, i) => (
                      <option key={`${i}_months`}>{i} {i === 1 ? 'Month' : 'Months'} </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="University">Proficiency</label>
              <select id="University" className="form-control">
                <option>Select Proficiency</option>
                <option>Beginner</option>
                <option>Proficient</option>
                <option>Expert</option>
              </select>
            </div>
          </div>
          <button class="btn lightBlue float-right px-5">Save</button>
        </form>
      </>
    );
  }
}

export default Skill