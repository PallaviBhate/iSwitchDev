import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../Context/ProfileContext';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';

const Language = (id) => {

  const [isLanguageKnown, setLanguageKnown] = React.useState('read');
  const [inputData, setFormInputData] = React.useState({
    language: '', proficiency: '',
    canWrite: false, canSpeak: false, canRead: false
  });
  const { state } = useContext(Context);
  useEffect(() => {
    if (id && state.candidateLanguageList) {
    state.then((data) => {
      console.log(id)
      const candidateLanguage = data.candidateLanguageList.filter((ele => ele.languageId === id.id))[0]
      setFormInputData(candidateLanguage)
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

  const updateLanguage = (e) => {
    // e.preventDefault();
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "language": inputData.language,
      "proficiency": inputData.proficiency,
      "canWrite": Boolean(inputData.canWrite),
      "canSpeak": Boolean(inputData.canSpeak),
      "canRead": Boolean(inputData.canRead),
      "candidateId": candidateId,
      "languageId": id.id
    }
    console.log(data)
    ApiServicesOrgCandidate.updateLanguage(data);
  }
  console.log('inputData', inputData)
  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select id="language" name="language" className="form-control"
              value={inputData.language}
              onChange={(e) => handleFormInputData(e)}
            >
              <option>Select Language</option>
              <option>Hindi</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="proficiency">Proficiency</label>
            <select id="proficiency" name="proficiency" className="form-control"
              value={inputData.proficiency}
              onChange={(e) => handleFormInputData(e)}
            >
              <option>Select Proficiency</option>
              <option>Expert</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
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
        <button class="btn lightBlue float-right px-5" onClick={updateLanguage}>Save</button>
      </form>
    </>
  );
}

export default Language