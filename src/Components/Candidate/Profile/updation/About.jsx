import React, { Component, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap'
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';
import { useForm } from "react-hook-form";


const About = ({showPopup}) => {
  const maxLength = 4000;
  const [inputData, setFormInputData] = React.useState({ about: '' })
  const [candidateProfile, setCandidateProfile] = React.useState('');
  const { state, getProfileInfo } = useContext(Context);
  const [aboutLength, setAboutLength] = React.useState(maxLength);
  const { register, errors, handleSubmit } = useForm();
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false)

  React.useEffect(() => {
    state.then((response) => {
      setCandidateProfile(response);
    })
  }, []);

  React.useEffect(() => {
    if (candidateProfile && candidateProfile.candidateInfo) {
    const { candidateInfo } = candidateProfile;
    const {about} = candidateInfo;
    handleAboutValidation(about);
      setAboutLength(maxLength - (about ? about.length : 0))
      setFormInputData({
        about: about
      });
    }
  }, [candidateProfile]);

  const handleAboutValidation = (value) => {
    if (value && value.length > maxLength) {
      errors.about = {message: `Only ${maxLength} characters are allowed.`  }
      setIsSubmitDisabled(true);
    } else {
      delete errors.about;
      setIsSubmitDisabled(false);
    }
  }
  const handleFormInputData = (e) => {
    if (e.target.name === 'about') {
      if (e.target.value.length > maxLength) {
        errors.about = {message: `Only ${maxLength} characters are allowed.`}
        setIsSubmitDisabled(true);
      } else {
        delete errors.about;
        setIsSubmitDisabled(false);
      }
      setAboutLength(maxLength - e.target.value.length)
    }
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }
  const onSubmit = (e) => {
    const candidateId = localStorage.getItem('candidateId')
    handleAboutValidation(inputData.about)
    let data = {
      "about": inputData.about,
      "candidateId": candidateId
    }
    console.log(data)
    ApiServicesOrgCandidate.updateProfileInfo(data, getProfileInfo,showPopup);
    // e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <div className="form-group">
            <label for="about">Profile Summary</label>
            <textarea class={`form-control ${errors.about && 'is-invalid'}`} rows="10"
              id="about"
              placeholder="Describe Here"
              name="about"
              value={inputData.about}
              onChange={(e) => handleFormInputData(e)}
              
            ></textarea>
            <div class="row m-0 p-0 mt-2">
              <div class="col-6 m-0 p-0">{errors.about && <span class="small-text-light errorMsg">{errors.about.message}</span>}</div>
              <div class="col-6 text-right m-0 p-0"><span class="small-text-light ">{aboutLength} Characters Left</span></div>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" disabled={isSubmitDisabled}>Save</button>

      </form>
    </>
  );
}

export default About