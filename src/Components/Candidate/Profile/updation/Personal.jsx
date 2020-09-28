import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import ReactTags from 'react-tag-autocomplete'
import { COUNTRY_LIST } from '../../../../Utils/AppConst';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';



const Personal = () => {
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
  })
  const [isGender, setGender] = useState('male');
  const [tags, setTags] = useState([]);
  const [workPermit, setWorkPermit] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

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
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "dob": startDate,
      "gender": isGender,
      "passportId": inputData.passportId,
      "address": inputData.address,
      "maritalStatus": inputData.maritalStatus,
      "pincode": inputData.pincode,
      "city": inputData.city,
      "state": inputData.state,
      "country": inputData.country,
      "workPermit":  workPermit.join(),
      "candidateId": candidateId
    }
    console.log(data)
    ApiServicesOrgCandidate.updateCareerInfo(data);
    e.preventDefault();
  }

  const handleFormInputData = (e) => {
    console.log(e)
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
                // value={startDate}
                value={inputData.dob}
                name={"dob"}
                //onChange={(e) => handleFormInputData(e)}
                onChange={date => setStartDate(date)}
                calendarIcon={<img src="../images/profile/calendar.png" style={{ width: '16px' }} />}
                clearIcon={null}
                className={"wid100"}
              />
            </div>
            <label className="modal-label mt-3" htmlFor="University" >Gender</label>
            <div>
              <div class={isGender === 'male' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="male"
                  name="male"
                  value="male"
                  checked={isGender === 'male'}
                  onChange={onValueChange}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">Male</label>
              </div>
              <div class={isGender === 'female' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input mr-2"
                  id="female"
                  name="female"
                  value="female"
                  checked={isGender === 'female'}
                  onChange={onValueChange}
                />
                <label class="modal-label radio-inline form-check-label" for="materialChecked2">Female</label>
              </div>
              <div class={isGender === 'transgender' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="transgender"
                  name="transgender"
                  value="transgender"
                  checked={isGender === 'transgender'}
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
            <input class="form-control" type="text"
              placeholder="85 Flat XYZ Building"
              id="address"
              required
              name="address"
              value={inputData.address}
              onChange={(e) => handleFormInputData(e)}
            />
          </div>
          <div class="form-group">
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
                  value={inputData.city}
                  id="city"
                  required
                  name="city"
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Patna</option>
                  <option>Nagpur</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select className="form-control"
                  value={inputData.state}
                  id="state"
                  required
                  name="state"
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi</option>
                  <option>Gujarat</option>
                </select>
              </div>
              <div className="col ml-3">
                <select className="form-control"
                  value={inputData.country}
                  id="country"
                  required
                  name="country"
                  onChange={(e) => handleFormInputData(e)}
                >
                  <option>India</option>
                  <option>America</option>
                  <option>Russia</option>
                  <option>Nepal</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="modal-label" htmlFor="maritalStatus">Marital Status</label>
            <select className="form-control"
              value={inputData.maritalStatus}
              id="maritalStatus"
              required
              name="maritalStatus"
              onChange={(e) => handleFormInputData(e)}
            >
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