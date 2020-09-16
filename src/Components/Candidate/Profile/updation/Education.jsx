import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import DatePicker from 'react-date-picker';

class Education extends Component {

  constructor() {
    super()
    this.state = {
      isEducationPopupShow: true,
      value: new Date(),
      courseType: 'fullTime'
    }

  }

  Show(Education) {
    var selectedValue = document.getElementById("Education").value;
    console.log(selectedValue);
    if (selectedValue == "1" || selectedValue == "2") {
      document.getElementById('Xth').style.display = 'none'

    } else {

      document.getElementById('Xth').style.display = 'block'
    }
    if (selectedValue == "1" || selectedValue == "2") {
      document.getElementById('Xth1').style.display = 'none'

    } else {

      document.getElementById('Xth1').style.display = 'block'
    }
    if (selectedValue == "1" || selectedValue == "2") {
      document.getElementById('Xth2').style.display = 'none'

    } else {

      document.getElementById('Xth2').style.display = 'block'
    }
    if (selectedValue == "1" || selectedValue == "2") {
      document.getElementById('Xth3').style.display = 'none'

    } else {

      document.getElementById('Xth3').style.display = 'block'
    }

    if (selectedValue == "3" || selectedValue == "4") {
      document.getElementById('Xth4').style.display = 'none'

    } else {

      document.getElementById('Xth4').style.display = 'block'
    }

    if (selectedValue == "3" || selectedValue == "4") {
      document.getElementById('Xth5').style.display = 'none'

    } else {

      document.getElementById('Xth5').style.display = 'block'
    }

  }

  render() {
    const { isEducationPopupShow } = this.state;
    return (
      <>

        <form>
          <div className="form-group">
            <label htmlFor="Education">Education Type<span class="required">*</span></label>
            <select id="Education" className="form-control" onChange={this.Show}>
              <option>Select Education</option>
              <option value="1">10th</option>
              <option value="2">12th</option>
              <option value="3">Post Graduate</option>
              <option value="4">Graduate or Diploma</option>
            </select>
          </div>
          <div className="form-group" id="Xth4">
            <label htmlFor="Course">Board<span class="required">*</span></label>
            <select id="Course" className="form-control">
              <option>Select Board</option>
              <option>State</option>
              <option>All India</option>
            </select>
          </div>
          <div className="form-group" id="Xth">
            <label htmlFor="Course">Course<span class="required">*</span></label>
            <select id="Course" className="form-control">
              <option>Select Course</option>
              <option>C.A.</option>
              <option>M.A.</option>
              <option>M.B.A.</option>
            </select>
          </div>
          <div className="form-group" id="Xth1">
            <label htmlFor="Specialization">Specialization<span class="required">*</span></label>
            <select id="Specialization" className="form-control">
              <option>Select Specialization</option>
              <option>Computers</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group" id="Xth2">
            <label htmlFor="University">University/Institute<span class="required">*</span></label>
            <select id="University" className="form-control">
              <option>Select University/Institute</option>
              <option>IIT Delhi</option>
              <option>NIT Delhi</option>
              <option>MIT Pune</option>
            </select>
          </div>
          <div className="form-group" id="Xth3">
            <label htmlFor="University">Course Type</label>
            <div>
              <div class={this.state.courseType === 'fullTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="fullTime"
                  name="fullTime"
                  value="fullTime"
                  checked={this.state.courseType === 'fullTime'}
                  onChange={this.onValueChange}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">Full Time</label>
              </div>
              <div class={this.state.courseType === 'partTime' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="partTime"
                  name="partTime"
                  value="partTime"
                  checked={this.state.courseType === 'partTime'}
                  onChange={this.onValueChange}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Part Time</label>
              </div>
              <div class={this.state.courseType === 'correspondence' ? "modal-label form-check" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="correspondence"
                  name="correspondence"
                  value="correspondence"
                  checked={this.state.courseType === 'correspondence'}
                  onChange={this.onValueChange}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Correspondence/Distance Learning</label>
              </div>
            </div>

          </div>
          <div className="form-group">
            <label htmlFor="University">Passing out year<span class="required">*</span></label>
            <div class="form-row">
              <div className="col">
                <select id="University" className="form-control">
                  {Array(50).fill().map((_, i) => (
                    <option key={`${i}_years`}>{parseInt(new Date().getFullYear()) - i}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group" id="Xth5">
            <label htmlFor="Course">Medium<span class="required">*</span></label>
            <select id="Course" className="form-control">
              <option>Select Medium</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="University">Marks<span class="required">*</span></label>

            <input class="form-control" type="text" placeholder="Enter Marks" />
          </div>
          <button class="btn lightBlue float-right px-5">Save</button>

        </form>
      </>
    );
  }
}

export default Education