import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import ReactTags from 'react-tag-autocomplete'
import { COUNTRY_LIST } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';
import Moment from 'moment';

const Personal = ({ showPopup }) => {
  const [inputData, setFormInputData] = React.useState({
    "dob": new Date(),
    "gender": "",
    "passportId": "",
    "address": "",
    "maritalStatus": "",
    "pincode": "",
    "city": "",
    "state": "",
    "country": "",
    "workPermit": ""
  });

  const [isGender, setGender] = useState('male');
  const [tags, setTags] = useState([]);
  const [workPermit, setWorkPermit] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { state, getProfileInfo } = useContext(Context);
  const [stateName, setStateName] = useState('');
  const [city, setCity] = useState('');
  const data = [];
  useEffect(() => {
    state.then((response) => {
      setStartDate(new Date(response.candidateInfo.dob))
      if (response.candidateInfo.workPermit !== null) {
        const workPermit = response.candidateInfo.workPermit.split(',');
        let intersection = COUNTRY_LIST.filter(x => workPermit.includes(x.name));
        setTags(intersection);
        setGender(response.candidateInfo.gender)
        intersection.map((val) => setWorkPermit(oldArray => [...oldArray, val.name]))
      }
      setFormInputData({
        "gender": response.candidateInfo.gender,
        "passportId": response.candidateInfo.passportId,
        "address": response.candidateInfo.address,
        "maritalStatus": response.candidateInfo.maritalStatus,
        "pincode": response.candidateInfo.pincode,
        "city": response.candidateInfo.city,
        "state": response.candidateInfo.state,
        "country": response.candidateInfo.country
      });
    });
    ApiServicesOrgCandidate.getListOfStates().then((response) => {
      console.log(response.data.responseObject);
      setStateName(response.data.responseObject);
    });
  }, []);

  const onValueChange = (event) => {
    setGender(event.target.value);
  }

  const onAddition = (tag) => {
    const tagsCnt = [].concat(tags, tag);
    setWorkPermit(oldArray => [...oldArray, tag.name]);
    setTags(tagsCnt);
  }
  const onDelete = (i) => {
    const tagsCnt = tags.slice(0)
    tagsCnt.splice(i, 1);
    setWorkPermit(Array.prototype.map.call(tagsCnt, s => s.name));
    setTags(tagsCnt)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const candidateId = localStorage.getItem('candidateId');
    const DOB = Moment(startDate);
    let data = {
      "dob": DOB.format('YYYY-MM-DD'),
      "gender": isGender,
      "passportId": inputData.passportId,
      "address": inputData.address,
      "maritalStatus": inputData.maritalStatus,
      "pincode": inputData.pincode,
      "city": inputData.city,
      "state": inputData.state,
      "country": inputData.country,
      "workPermit": workPermit.join(),
      "candidateId": candidateId
    }
    ApiServicesOrgCandidate.updateCareerInfo(data, getProfileInfo, showPopup);
  }

  const handleFormInputData = (e) => {
    if (e.target.name === 'state') {
      ApiServicesOrgCandidate.getListOfCity(e.target.value).then((response) => {
        console.log(response)
        if (response) {
          setCity(response.data.responseObject);
        } else {
          setCity('');
        }
      });
    }
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label className="modal-label" htmlFor="University">Date of Birth</label>
            <div>
              <DatePicker
                value={startDate}
                format='y-MM-dd'
                onChange={date => { setStartDate(date); console.log(date) }}
                calendarIcon={<img src="../images/profile/calendar.png" style={{ width: '16px' }} />}
                clearIcon={null}
                className={"wid100"}
              />
            </div>
            <label className="modal-label mt-3" htmlFor="University" >Gender</label>
            <div>
              <div class={isGender === 'Male' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="Male"
                  name="Male"
                  value="Male"
                  checked={isGender === 'Male'}
                  onChange={onValueChange}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">Male</label>
              </div>
              <div class={isGender === 'Female' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="Female"
                  name="Female"
                  value="Female"
                  checked={isGender === 'Female'}
                  onChange={onValueChange}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Female</label>
              </div>
              <div class={isGender === 'Transgender' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="Transgender"
                  name="Transgender"
                  value="Transgender"
                  checked={isGender === 'Transgender'}
                  onChange={onValueChange}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Transgender</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="modal-label" htmlFor="University">Passport ID</label>
            <input class="form-control"
              type="text"
              placeholder="LKJ1234"
              id="passportId"
              required
              name="passportId"
              value={inputData.passportId}
              onChange={(e) => handleFormInputData(e)}
            />
          </div>
          <div className="form-group">
            <label className="modal-label" htmlFor="University">Address</label>
            <textarea  rows="6" class="form-control" type="text"
              placeholder="85 Flat XYZ Building"
              id="address"
              required
              name="address"
              value={inputData.address}
              onChange={(e) => handleFormInputData(e)}
            />
          </div>
          {/* <div class="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <input class="form-control"
                  type="text" placeholder="Pin Code"
                  value={inputData.pincode}
                  id="pincode"
                  required
                  name="pincode"
                  onChange={(e) => handleFormInputData(e)}
                />
              </div>
              <div className="col ml-3">
                <select className="form-control"
                  value={inputData.state}
                  id="state"
                  required
                  name="state"
                  onChange={(e) => handleFormInputData(e)}
                >
                <option value='1' disabled>Select State</option>
                  {
                    (stateName) ? stateName.map((name, index) => (
                      <option value={name.stateCode}>{name.stateName}</option>
                    )) : null
                  }
                </select>
              </div>
            </div>
          </div> */}
          {/* <div class="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select className="form-control"
                  value={inputData.city}
                  id="city"
                  required
                  name="city"
                  disabled={city === '' ? true : false}
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option value='1' disabled>Select City</option>
                  {
                    (city) ? city.map((name, index) => (
                      <option value={name.state_code}>{name.city_name}</option>
                    )) : null
                  }
                </select>
              </div>
              <div className="col ml-3">
                <select className="form-control"
                  value={inputData.country}
                  id="country"
                  name="country"
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option value='1' disabled>Select Country</option>
                  <option>India</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="form-group">
            <label className="modal-label" htmlFor="maritalStatus">Marital Status</label>
            <select className="form-control"
              value={inputData.maritalStatus}
              id="maritalStatus"
              required
              name="maritalStatus"
              onChange={(e) => handleFormInputData(e)}
            >
              <option>Select Marital Status</option>
              <option>Single/unmarried</option>
              <option>Married</option>
              <option>Widowed</option>
              <option>Divorced</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="modal-label" htmlFor="University">Work Permit for countries</label>
            <ReactTags
              placeholderText={'Add New Country'}
              minQueryLength={1}
              tags={tags}
              suggestions={COUNTRY_LIST}
              onDelete={onDelete}
              onAddition={onAddition} />
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}


export default Personal