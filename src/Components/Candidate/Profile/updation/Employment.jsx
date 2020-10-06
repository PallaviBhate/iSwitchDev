import React, { Component, useState, useContext, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import { MONTH_NAMES } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useForm } from "react-hook-form";

const Employment = ({ id, showPopup }) => {
  const [currentCompany, setCurrentCompany] = useState(false);
  const [inputData, setFormInputData] = React.useState({
    "currentCompany": "",
    "description": "",
    "designation": "",
    "employmentType": "",
    "organization": "",
    "startedWorkingFromMonth": "",
    "startedWorkingFromYear": "",
    "workedTillMonth": "",
    "workedTillYear": ""
  });
  const { state, getProfileInfo } = useContext(Context);
  const [singleOrganization, setSingleOrganization] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const { register, errors, handleSubmit } = useForm();
  useEffect(() => {
    ApiServicesOrgCandidate.getListOfOrganizations().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].organizations);
        console.log(result)
        setOrganizations(result);
      } else {
        setOrganizations('');
      }
    })
    if (id) {
      state.then((data) => {
        const employmentDetails = data.employmentDetailsList.filter((ele => ele.employmentId === id))[0]
        console.log(data)
        setCurrentCompany(employmentDetails.currentCompany)
        setSingleOrganization([employmentDetails.organization])
        setFormInputData(employmentDetails)
      })
    }
  }, []);

  const onSubmit = (e) => {
    // e.preventDefault();
    let data = {
      "currentCompany": currentCompany,
      "description": inputData.description,
      "designation": inputData.designation,
      "employmentType": inputData.employmentType,
      "organization": singleOrganization.toString(),
      "startedWorkingFromMonth": inputData.startedWorkingFromMonth,
      "startedWorkingFromYear": inputData.startedWorkingFromYear,
      "workedTillMonth": inputData.workedTillMonth,
      "workedTillYear": inputData.workedTillYear
    }

    if (id) {
      ApiServicesOrgCandidate.updateEmployment({ ...data, employmentId: id }, getProfileInfo, showPopup);
    } else {
      ApiServicesOrgCandidate.addEmployment(data, getProfileInfo, showPopup);
    }
  }

  const handleFormInputData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // if (name === "canRead" || name === "canWrite" || name === "canSpeak") {
    //   value = e.target.checked ? true : false;
    // }
    console.log(value)
    return (
      setFormInputData({
        ...inputData,
        [name]: value
      })
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="designation">Designation<span >*</span></label>
            <input class="form-control" type="text"
              placeholder="Enter Designation"
              name={"designation"}
              value={inputData.designation}
              onChange={(e) => handleFormInputData(e)}
              ref={register({ required: true })}
            />
            {errors.designation && <div class="errorMsg">Please Enter Designation</div>}
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization<span >*</span></label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              onChange={setSingleOrganization}
              options={organizations}
              placeholder="Choose a organizations..."
              selected={singleOrganization}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employmentType">Employment Type<span >*</span></label>
            <div class="form-row">
              <div className="col">
                <select id="employmentType"
                  className="form-control"
                  name={"employmentType"}
                  value={inputData.employmentType}
                  onChange={(e) => handleFormInputData(e)}
                  ref={register({ required: "Select Employment Type" })}
                >
                  <option disabled value="" selected>Select Employment Type</option>
                  <option>Permanent</option>
                  <option>Contractual</option>
                </select>
                {errors.employmentType && <div class="errorMsg">Please Enter employmentType</div>}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="University">Is this your current company?</label>
            <div>
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input mr-2"
                  name={"currentCompany"}
                  value={inputData.currentCompany}
                  id="currentCompany"
                  onClick={() => setCurrentCompany(true)}
                  checked={currentCompany ? true : false} />
                <label class="radio-inline form-check-label" for="currentCompany">Yes</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio"
                  class="form-check-input mr-2" id="currentCompany"
                  value="no"
                  name={"currentCompany"}
                  value={currentCompany}
                  onClick={() => setCurrentCompany(false)}
                  checked={!currentCompany ? true : false} />
                <label class="radio-inline form-check-label" for="materialChecked2">No</label>
              </div>
            </div>
          </div>
          <label htmlFor="startedWorkingFromYear" class="mt-2">Started working from<span >*</span></label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select
                  id="startedWorkingFromYear"
                  className="form-control"
                  name={"startedWorkingFromYear"}
                  value={inputData.startedWorkingFromYear}
                  onChange={(e) => handleFormInputData(e)}
                  ref={register({ required: "Select Year" })}
                >
                  <option value="" disabled selected>Select Year</option>
                  {Array(100).fill().map((_, i) => (
                    <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                    }  </option>
                  ))}
                </select>
                {errors.startedWorkingFromYear && <div class="errorMsg">Please Enter year</div>}
              </div>
              <div className="col ml-3">
                <select id="startedWorkingFromMonth"
                  className="form-control"
                  name={"startedWorkingFromMonth"}
                  value={inputData.startedWorkingFromMonth}
                  onChange={(e) => handleFormInputData(e)}
                  ref={register({ required: 'Select Month' })}
                >
                  <option value="" disabled selected>Select Month</option>
                  {MONTH_NAMES.map((monthName, i) => (
                    <option key={`${i}_months`}>{monthName}</option>
                  ))}
                </select>
                {errors.startedWorkingFromMonth && <div class="errorMsg">Please Enter month</div>}
              </div>
            </div>
          </div>

          {!currentCompany ? <><label htmlFor="University" class="mt-2">Worked Till<span >*</span></label>
            <div className="form-group">
              <div class="form-row">
                <div className="col mr-3">
                  <select id="workedTillYear"
                    className="form-control"
                    name={"workedTillYear"}
                    value={inputData.workedTillYear}
                    onChange={(e) => handleFormInputData(e)}
                    ref={register({ required: 'Select Year' })}
                  >
                    <option value="" disabled selected>Select Year</option>
                    {Array(100).fill().map((_, i) => (
                      <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                      }  </option>
                    ))}
                  </select>
                  {errors.workedTillYear && <div class="errorMsg">Please Enter year</div>}
                </div>
                <div className="col ml-3">
                  <select id="workedTillMonth"
                    className="form-control"
                    name={"workedTillMonth"}
                    value={inputData.workedTillMonth}
                    onChange={(e) => handleFormInputData(e)}
                    ref={register({ required: 'Select Month' })}
                  >
                    <option value="" disabled selected>Select Month</option>
                    {MONTH_NAMES.map((monthName, i) => (
                      <option key={`${i}_months`}>{monthName}</option>
                    ))}
                  </select>
                  {errors.workedTillMonth && <div class="errorMsg">Please Enter month</div>}
                </div>
              </div>
            </div></> : null}
          <div className="form-group">
            <label for="description">Describe your job profile</label>
            <textarea class="form-control" rows="8" cols="70" maxlength="2000"
              id="description"
              name={"description"}
              value={inputData.description}
              onChange={(e) => handleFormInputData(e)}
              placeholder="Enter Your Job Profile Details Here..."
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
              </div>
            <div class="col text-right mt-2 px-0">
              <span class="small-text-light ">4000 Characters Left</span>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" >Save</button>
      </form>

    </>
  );
}

export default Employment;