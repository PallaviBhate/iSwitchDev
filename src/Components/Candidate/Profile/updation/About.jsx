import React, { Component, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap'
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';

const About = () => {
  const [inputData, setFormInputData] = React.useState({ about: '' })
  const [candidateProfile, setCandidateProfile] = React.useState('');
  const { state } = useContext(Context);


  React.useEffect(() => {
    state.then((response) => {
      setCandidateProfile(response)
    })
  }, []);

  React.useEffect(() => {
    setFormInputData({
      about: candidateProfile && candidateProfile.candidateInfo && candidateProfile.candidateInfo.about
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
      "about": inputData.about,
      "candidateId": candidateId
    }
    console.log(data)
    ApiServicesOrgCandidate.updateProfileInfo(data);
    //e.preventDefault();
  }
  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label for="about">Profile Summary</label>
            <textarea class="form-control" rows="10"
              id="about"
              placeholder="Describe Here"
              required name="about"
              value={inputData.about}
              onChange={(e) => handleFormInputData(e)}
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
            <div class="col text-right mt-2 px-0">
              <span class="small-text-light ">4000 Characters Left</span>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={handleSubmit}>Save</button>

      </form>
    </>
  );
}

export default About