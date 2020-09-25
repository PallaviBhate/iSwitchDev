import React, { useContext, useEffect } from 'react';
import { Context } from '../../../../Context/ProfileContext';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';

const Language = (id) => {

  const candidateId = localStorage.getItem('candidateId');
  const [isLanguageKnown, setLanguageKnown] = React.useState('read');
  const [inputData, setFormInputData] = React.useState({
    language: '', proficiency: '',
    canWrite: '', canSpeak: '', canRead: '', "candidateId": candidateId
  });
  const { state } = useContext(Context);
  useEffect(() => {
    state.then((data) => {
      const candidateLanguage = data.candidateLanguageList.filter((ele => ele.languageId === id.id))
      setFormInputData(candidateLanguage[0])
    })
  }, []);

  const onValueChange = (event) => {
    setLanguageKnown(event.target.value);
  }

  const handleFormInputData = (e) => {
    return (
      setFormInputData({
        [e.target.name]: e.target.value
      })
    )
  }

  const updateLanguage = (e) => {
    console.log(inputData)
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "language": inputData.language,
      "proficiency": inputData.proficiency,
      "canWrite": inputData.canWrite,
      "canSpeak": inputData.canSpeak,
      "canRead": inputData.canRead,
      "candidateId": candidateId
    }
    console.log(data)
    ApiServicesOrgCandidate.updateCareerInfo(data);
    e.preventDefault();
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="Language">Language</label>
            <select id="Language" className="form-control"
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
            <label htmlFor="University">Proficiency</label>
            <select id="University" className="form-control"
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
                    // value="read"
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
                    //value="write"
                    checked={inputData.canWrite}
                    // onChange={onValueChange}
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
                    //value="speak"
                    checked={inputData.canSpeak}
                    //onChange={onValueChange}
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