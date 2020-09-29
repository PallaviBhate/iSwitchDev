import React, { Component, useState, useContext, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import { MONTH_NAMES } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';

const Employment = (id) => {
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
  const { state } = useContext(Context);
  useEffect(() => {
    if (id.id) {
      state.then((data) => {
        const employmentDetails = data.employmentDetailsList.filter((ele => ele.employmentId === id.id))[0]
        console.log(data)
        setCurrentCompany(employmentDetails.currentCompany)
        setFormInputData(employmentDetails)
      })
    }
  }, []);

  const updateEmployment = (e) => {
    let data = {
      "currentCompany": currentCompany,
      "description": inputData.description,
      "designation": inputData.designation,
      "employmentType": inputData.employmentType,
      "organization": inputData.organization,
      "startedWorkingFromMonth": inputData.startedWorkingFromMonth,
      "startedWorkingFromYear": inputData.startedWorkingFromYear,
      "workedTillMonth": inputData.workedTillMonth,
      "workedTillYear": inputData.workedTillYear
    }

    if (id.id) {
      ApiServicesOrgCandidate.updateEmployment({ ...data, employmentId: id.id });
    } else {
      ApiServicesOrgCandidate.addEmployment(data);
    }
    //e.preventDefault();
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
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="designation">Designation<span class="required">*</span></label>
            <input class="form-control" type="text"
              placeholder="Enter Designation"
              name={"designation"}
              value={inputData.designation}
              onChange={(e) => handleFormInputData(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization<span class="required">*</span></label>
            <input class="form-control" type="text"
              placeholder="Enter Organization"
              name={"organization"}
              value={inputData.organization}
              onChange={(e) => handleFormInputData(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employmentType">Employment Type<span class="required">*</span></label>
            <div class="form-row">
              <div className="col">
                <select id="employmentType"
                  className="form-control"
                  name={"employmentType"}
                  value={inputData.employmentType}
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option>Select Employment Type</option>
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
          <label htmlFor="startedWorkingFromYear" class="mt-2">Started working from<span class="required">*</span></label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select
                  id="startedWorkingFromYear"
                  className="form-control"
                  name={"startedWorkingFromYear"}
                  value={inputData.startedWorkingFromYear}
                  onChange={(e) => handleFormInputData(e)}
                >
                  {Array(100).fill().map((_, i) => (
                    <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                    }  </option>
                  ))}
                </select>
              </div>
              <div className="col ml-3">
                <select id="startedWorkingFromMonth"
                  className="form-control"
                  name={"startedWorkingFromMonth"}
                  value={inputData.startedWorkingFromMonth}
                  onChange={(e) => handleFormInputData(e)}
                >
                  {MONTH_NAMES.map((monthName, i) => (
                    <option key={`monthName`}>{monthName}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {!currentCompany ? <><label htmlFor="University" class="mt-2">Worked Till<span class="required">*</span></label>
            <div className="form-group">
              <div class="form-row">
                <div className="col mr-3">
                  <select id="workedTillYear"
                    className="form-control"
                    name={"workedTillYear"}
                    value={inputData.workedTillYear}
                    onChange={(e) => handleFormInputData(e)}
                  >
                    {Array(100).fill().map((_, i) => (
                      <option key={`${i}_years`}>{(parseInt(new Date().getFullYear()) - i) - i
                      }  </option>
                    ))}
                  </select>
                </div>
                <div className="col ml-3">
                  <select id="workedTillMonth"
                    className="form-control"
                    name={"workedTillMonth"}
                    value={inputData.workedTillMonth}
                    onChange={(e) => handleFormInputData(e)}
                  >
                    {MONTH_NAMES.map((monthName, i) => (
                      <option key={`monthName`}>{monthName}</option>
                    ))}
                  </select>
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
              required></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
              </div>
            <div class="col text-right mt-2 px-0">
              <span class="small-text-light ">4000 Characters Left</span>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={updateEmployment}>Save</button>
      </form>

    </>
  );
}

export default Employment;