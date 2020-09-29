import axios from 'axios'
import { ApiBaseUrl } from '../Config.jsx'

import React, { Component, useContext } from 'react';
import { Context } from '../Context/ProfileContext';

class ApiServicesOrgCandidate {

  fetchProfileInfo() {
    const userID = localStorage.getItem('userId')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/profileview/${userID}`)
        .then(Response => Response.data.responseObject)
    )
  }

  updateCareerInfo(careerInfo, getProfileRefresh, showPopup) {
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, careerInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateProfileInfo(profileInfo, getProfileRefresh, showPopup) {
    console.log(profileInfo)
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, profileInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateSkill(skillInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/skill?candidateId=${candidateId}`, skillInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addSkill(skillInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId');
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/skill/${candidateId}`, skillInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  deleteSkill(id, getProfileInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .delete(`${ApiBaseUrl}/candidate/skill?candidateId=${candidateId}&skillId=${id}`)
        .then(resp => getProfileInfo()).catch(error => {
          console.log(error);
        })
    )
  }

  updateCertification(certificationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/certificate?candidateId=${candidateId}`, certificationInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addLanguage(languageInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/languages/${candidateId}`, languageInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addCertification(certificationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/certificate/${candidateId}`, certificationInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateLanguage(updateLanguage, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/languages?candidateId=${candidateId}`, updateLanguage)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }


  deleteLanguage(id, getProfileInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .delete(`${ApiBaseUrl}/candidate/languages?langaugeId=${id}&candidateId=${candidateId}`)
        .then(resp => getProfileInfo()).catch(error => {
          console.log(error);
        })
    )
  }

  addEmployment(employmentInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/employment/${candidateId}`, employmentInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateEmployment(employmentInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/employment?candidateId=${candidateId}`, employmentInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateEducation(educationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(educationInfo);
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/education?candidateId=${candidateId}`, educationInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addEducation(educationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/education/${candidateId}`, educationInfo)
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

}

export default new ApiServicesOrgCandidate();
