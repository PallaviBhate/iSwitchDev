import React, { useState, useContext } from 'react';
import ReactTags from 'react-tag-autocomplete'
import { CITY_LIST } from '../../../../Utils/AppConst';
import { Context } from '../../../../Context/ProfileContext';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';

const CareerProfile = () => {
  const [isPreferredShift, setPreferredShift] = useState('day');
  const [tags, setTags] = useState([]);
  const [employmentType, setEmploymentType] = useState('');
  const [addPreferredLocation, setAddPreferredLocation] = useState([]);
  const onValueChange = (event) => {
    setPreferredShift(event.target.value);
  }

  const onAddition = (tag) => {
    const tagsCnt = [].concat(tags, tag)
    setAddPreferredLocation(oldArray => [...oldArray, tag.name]);
    setTags(tagsCnt)
  }
  const onDelete = (i) => {
    const tagsCnt = tags.slice(0)
    tagsCnt.splice(i, 1)
    setTags(tagsCnt)
  }

  const updateCareerProfile = (e) => {
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "preferredShift": isPreferredShift,
      "employmentType": employmentType,
      "preferredLocation": addPreferredLocation.join(),
      "candidateId": candidateId
    }
    ApiServicesOrgCandidate.updateCareerInfo(data);
    //e.preventDefault();
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="University">Employment Type</label>
            <select id="University" className="form-control"
              onChange={(e) => { setEmploymentType(e.target.value) }}
            >
              <option>Permanent</option>
              <option>Contractual</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="University">Preferred Locations</label>
            <ReactTags
              placeholderText={'Add Preferred Locations'}
              minQueryLength={1}
              tags={tags}
              suggestions={CITY_LIST}
              onDelete={onDelete}
              onAddition={onAddition}
            />
          </div>
          <div className="form-group">
            <label htmlFor="University">Preferred Shift</label>
            <div class="form-row">
              <div className="col-2">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="day"
                    value="day"
                    checked={isPreferredShift === 'day'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="day">Day</label>
                </div>
              </div>
              <div className="col-3.5">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="AfterNoon"
                    value="AfterNoon"
                    checked={isPreferredShift === 'AfterNoon'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="AfterNoon">AfterNoon</label>
                </div>
              </div>
              <div className="col-2.5">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="night"
                    value="night"
                    checked={isPreferredShift === 'night'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="night">Night</label>
                </div>
              </div>
              <div className="col-3">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="flexible"
                    value="flexible"
                    checked={isPreferredShift === 'flexible'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="flexible">Flexible</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={updateCareerProfile}>Save</button>
      </form>

    </>
  );
}

export default CareerProfile