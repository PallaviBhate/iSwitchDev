import axios from 'axios'
import { ApiBaseUrl } from '../Config.jsx'

import React, { Component, useContext } from 'react';
import { Context } from '../Context/ProfileContext';
import { AUTH_HEADER } from '../Utils/AppConst.jsx';

class ApiServicesOrgCandidate {
  
  fetchProfileInfo() {
    const userID = localStorage.getItem('userId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/profileview/${userID}`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response.data.responseObject)
    )
  }

  updateCareerInfo(careerInfo, getProfileRefresh, showPopup) {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, careerInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateProfileInfo(profileInfo, getProfileRefresh, showPopup) {
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, profileInfo, AUTH_HEADER )
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateSkill(skillInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/skill?candidateId=${candidateId}`, skillInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addSkill(skillInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId');
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/skill/${candidateId}`, skillInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  deleteSkill(id, getProfileInfo) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .delete(`${ApiBaseUrl}/candidate/skill?candidateId=${candidateId}&skillId=${id}`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileInfo()).catch(error => {
          console.log(error);
        })
    )
  }

  updateCertification(certificationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/certificate?candidateId=${candidateId}`, certificationInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addLanguage(languageInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/languages/${candidateId}`, languageInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addCertification(certificationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/certificate/${candidateId}`, certificationInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateLanguage(updateLanguage, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/languages?candidateId=${candidateId}`, updateLanguage, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }


  deleteLanguage(id, getProfileInfo) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .delete(`${ApiBaseUrl}/candidate/languages?langaugeId=${id}&candidateId=${candidateId}`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileInfo()).catch(error => {
          console.log(error);
        })
    )
  }

  addEmployment(employmentInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/employment/${candidateId}`, employmentInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateEmployment(employmentInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/employment?candidateId=${candidateId}`, employmentInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  updateEducation(educationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(educationInfo);
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/education?candidateId=${candidateId}`, educationInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  addEducation(educationInfo, getProfileRefresh, showPopup) {
    const candidateId = localStorage.getItem('candidateId')
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/education/${candidateId}`, educationInfo, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(resp => getProfileRefresh(), showPopup(false)).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfStates() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfStates`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfCity(stateCode) {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/ListOfCities?stateCode=${stateCode}`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfInstitutes() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfInstitutes`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfOrganizations() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfOrganizations`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfCertificates() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfCertificates`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfBoards() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfBoards`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfLanguages() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfLanguages`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfEducationType() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfEducationType`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

  getListOfSkills() {
    const authToken = localStorage.getItem('authToken')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/listOfSkills`, {
          headers: {'Authorization': `Bearer ${authToken}`}
        })
        .then(Response => Response).catch(error => {
          console.log(error);
        })
    )
  }

      // Post Email notifications Settings of Candidate with Token
      getToken() {
        const token = JSON.parse(localStorage.getItem('userDetails')).authToken;
        const tokenHeader = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token } }
        return tokenHeader;
      }

      putCandidateEmailSettings(data) {
        return (
          axios
            .put(ApiBaseUrl + "/candidate/notificationSettingForCandidate", data, this.getToken())
            .then(Response => Response)
        )
      }

      //Get candidate Email notifications Settings
      getCandidateSettings() {
        const candidateId = JSON.parse(localStorage.getItem('userDetails')).id;
        return (
          axios
            .get(ApiBaseUrl + '/candidate/notificationSettingForCandidate?candidateId=' +candidateId, this.getToken())
            .then(Response => Response)
        )
      }

}

export default new ApiServicesOrgCandidate();
