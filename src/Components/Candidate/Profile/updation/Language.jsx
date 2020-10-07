import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Context/ProfileContext';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Typeahead } from 'react-bootstrap-typeahead';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
const Language = ({ id, showPopup }) => {

  const [isLanguageKnown, setLanguageKnown] = React.useState('read');
  const [errorsLanguage, setErrorsLanguage] = useState('');

  const [inputData, setFormInputData] = React.useState({
    language: '', proficiency: '',
    canWrite: false, canSpeak: false, canRead: false
  });
  const { state, getProfileInfo } = useContext(Context);
  const [singleLanguage, setSingleLanguage] = React.useState('');
  const [languages, setLanguages] = React.useState([]);
  const { register, errors, handleSubmit } = useForm({mode: 'all'});
  useEffect(() => {
    ApiServicesOrgCandidate.getListOfLanguages().then((response) => {
      if (response) {
        const result = Object.keys(response.data.responseObject).map((key, index) => response.data.responseObject[key].languages);
        console.log(result)
        setLanguages(result);
      } else {
        setLanguages('');
      }
    })
    if (id) {
      state.then((data) => {
        const candidateLanguage = data.candidateLanguageList.filter((ele => ele.languageId === id))[0]
        setFormInputData(candidateLanguage);
        setSingleLanguage([candidateLanguage.language])
      })
    }
  }, []);

  const onValueChange = (event) => {
    setLanguageKnown(event.target.value);
  }

  const handleFormInputData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "canRead" || name === "canWrite" || name === "canSpeak") {
      value = e.target.checked ? true : false;
    }
    console.log(value)
    return (
      setFormInputData({
        ...inputData,
        [name]: value
      })
    )
  }

  const onSubmit = (e) => {

    // e.preventDefault();
    const candidateId = localStorage.getItem('candidateId')
    if (!isValidate()) {
      let data = {
        "language": singleLanguage.toString(),
        "proficiency": inputData.proficiency,
        "canWrite": Boolean(inputData.canWrite),
        "canSpeak": Boolean(inputData.canSpeak),
        "canRead": Boolean(inputData.canRead)
      }
      if (id) {
        ApiServicesOrgCandidate.updateLanguage({ ...data, languageId: id }, getProfileInfo, showPopup);
      } else {
        ApiServicesOrgCandidate.addLanguage(data, getProfileInfo, showPopup);
      }
    }
  
}

const isValidate = () => {
  if (singleLanguage === '') {
    setErrorsLanguage('Please Enter Language');
    return true;
  }
}

return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <div className="form-group">
          <label htmlFor="language">Language <span class="required">*</span></label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="language"
            onChange={setSingleLanguage}
            options={languages}
            placeholder="Choose a language..."
            selected={singleLanguage}
          />
          {errorsLanguage && <div class="errorMsg">{errorsLanguage}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="proficiency">Proficiency <span class="required">*</span></label>
          <select id="proficiency" name="proficiency" className="form-control"
            value={inputData.proficiency}
            onChange={(e) => handleFormInputData(e)}
            ref={register}
          >
            <option value="" disabled selected>Select Proficiency</option>
            <option>Expert</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          {errors.proficiency && <div class="errorMsg">Please Enter proficiency</div>}
        </div>
        <div class="form-group">
          <div class="form-row">
            <div className="col-3">
              <div class="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox"
                  class="custom-control-input"
                  id="customControlAutosizing"
                  name="canRead"
                  checked={inputData.canRead}
                  value={inputData.canRead}
                  onChange={(e) => handleFormInputData(e)}
                />
                <label class="custom-control-label" for="customControlAutosizing">Read</label>
              </div>
            </div>
            <div className="col-3">
              <div class="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlAutosizing1"
                  name="canWrite"
                  checked={inputData.canWrite}
                  value={inputData.canWrite}
                  onChange={(e) => handleFormInputData(e)}
                />
                <label class="custom-control-label" for="customControlAutosizing1">Write</label>
              </div>
            </div>
            <div className="col-3">
              <div class="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlAutosizing2"
                  name="canSpeak"
                  checked={inputData.canSpeak}
                  value={inputData.canSpeak}
                  onChange={(e) => handleFormInputData(e)}
                />
                <label class="custom-control-label" for="customControlAutosizing2">Speak</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn lightBlue float-right px-5" >Save</button>
    </form>
  </>
);
}

export default Language