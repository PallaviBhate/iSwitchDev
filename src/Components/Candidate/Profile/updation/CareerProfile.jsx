import React, { useState, useContext, useEffect } from 'react';
import ReactTags from 'react-tag-autocomplete'
import { CITY_LIST } from '../../../../Utils/AppConst';
import { Context } from '../../../../Context/ProfileContext';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';

const CareerProfile = () => {
  const [isPreferredShift, setPreferredShift] = useState('day');
  const [tags, setTags] = useState([]);
  const [employmentType, setEmploymentType] = useState('');
  const [addPreferredLocation, setAddPreferredLocation] = useState([]);
  const { state } = useContext(Context);

  useEffect(() => {
    state.then((response) => {
      setEmploymentType(response.candidateInfo.employmentType)
      setPreferredShift(response.candidateInfo.preferredShift)
      debugger
      const preferredLocation = response.candidateInfo.preferredLocation.split(',');
      let intersection = CITY_LIST.filter(x => preferredLocation.includes(x.name));
      console.log(intersection)
      setTags(intersection);
      intersection.map((val) => setAddPreferredLocation(oldArray => [...oldArray, val.name]))
    })
  }, []);

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
    setAddPreferredLocation(Array.prototype.map.call(tagsCnt, s => s.name))
    setTags(tagsCnt)
  }

  const updateCareerProfile = (e) => {
    console.log(addPreferredLocation)
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "preferredShift": isPreferredShift,
      "employmentType": employmentType,
      "preferredLocation": addPreferredLocation.join(),
      "candidateId": candidateId
    }
    ApiServicesOrgCandidate.updateCareerInfo(data);
    // e.preventDefault();
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="University">Employment Type</label>
            <select id="University"
              className="form-control"
              value={employmentType}
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
                    id="Day"
                    value="Day"
                    checked={isPreferredShift === 'Day'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="Day">Day</label>
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
                    id="Night"
                    value="Night"
                    checked={isPreferredShift === 'Night'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="Night">Night</label>
                </div>
              </div>
              <div className="col-3">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="Flexible"
                    value="Flexible"
                    checked={isPreferredShift === 'Flexible'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="Flexible">Flexible</label>
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