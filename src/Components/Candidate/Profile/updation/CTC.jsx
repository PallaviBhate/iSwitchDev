import React from 'react';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';

const CTC = () => {
  const [isCurrency, setCurrency] = React.useState('INR');

  const onValueChange = (event) => {
    setCurrency(event.target.value);
  }

  const [inputData, setFormInputData] = React.useState({ currentCtcInLakh: '', currentCtcInThousand: '', expectedCtcInLakh: '', expectedCtcInThousand: '', currencyType: '' })
  const [candidateProfile, setCandidateProfile] = React.useState('');
  const { getProfileInfo } = React.useContext(Context);
  React.useEffect(() => {
    getProfileInfo();
    ApiServicesOrgCandidate.fetchProfileInfo().then(response => {
      setCandidateProfile(response)
    }).catch(error => { });
  }, []);

  React.useEffect(() => {
    setFormInputData({
      currencyType: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.currencyType,
      currentCtcInLakh: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.currentCTC && `${candidateProfile.candidateInfo.currentCTC}`.split('.')[0],
      currentCtcInThousand: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.currentCTC && `${candidateProfile.candidateInfo.currentCTC}`.split('.')[1],
      expectedCtcInLakh: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.expectedCTC && `${candidateProfile.candidateInfo.expectedCTC}`.split('.')[0],
      expectedCtcInThousand: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.expectedCTC && `${candidateProfile.candidateInfo.expectedCTC}`.split('.')[1]
    });
  }, [candidateProfile]);
  const handleFormInputData = (e) => {
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }
  const handleSubmit = (e) => {
    const candidateId = localStorage.getItem('candidateId')
    let data = {
      "currencyType": inputData.currencyType,
      "currentCTC": `${inputData.currentCtcInLakh}.${inputData.currentCtcInThousand}`,
      "expectedCTC": `${inputData.expectedCtcInLakh}.${inputData.expectedCtcInThousand}`,
      "candidateId": candidateId
    }
    console.log(data)
    ApiServicesOrgCandidate.updateProfileInfo(data);
    // e.preventDefault();
  }
  console.log('inputData', inputData)

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <div>
              <div class={inputData.currencyType === 'INR' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="currencyType"
                  name="currencyType"
                  value="INR"
                  checked={inputData.currencyType === 'INR'}
                  onChange={handleFormInputData}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">INR</label>
              </div>
              <div class={inputData.currencyType === 'USD' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="currencyType"
                  name="currencyType"
                  value="USD"
                  checked={inputData.currencyType === 'USD'}
                  onChange={handleFormInputData}
                />
                <label class="radio-inline form-check-label" for="materialChecked3">USD</label>
              </div>
            </div>
          </div>
          <label htmlFor="University">Current Salary</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-4">
                <select id="currentCtcInLakh" name="currentCtcInLakh" value={inputData.currentCtcInLakh} onChange={(e) => handleFormInputData(e)} className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
              </div>
              <div className="col  ml-4">
                <select id="currentCtcInThousand" className="form-control" name="currentCtcInThousand" value={inputData.currentCtcInThousand} onChange={(e) => handleFormInputData(e)} >
                  <option>0</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
              </div>
            </div>
          </div>
          <label htmlFor="University">Expected Salary</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-4">
                <select id="expectedCtcInLakh" className="form-control" name="expectedCtcInLakh" value={inputData.expectedCtcInLakh} onChange={(e) => handleFormInputData(e)} >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
              </div>
              <div className="col ml-4">
                <select id="expectedCtcInThousand" className="form-control" name="expectedCtcInThousand" value={inputData.expectedCtcInThousand} onChange={(e) => handleFormInputData(e)} >
                  <option>0</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
              </div>
            </div>
          </div>
        </div>

        <button class="btn lightBlue float-right px-5" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}
export default CTC