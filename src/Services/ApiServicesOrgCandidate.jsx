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

  updateCareerInfo(careerInfo) {
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, careerInfo)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateProfileInfo(profileInfo, getProfileRefresh, showPopup) {
    console.log(profileInfo)
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, profileInfo)
        .then(resp =>  getProfileRefresh(),showPopup(false)).catch (error => {
      console.log(error);
    })
    )
  }

  updateSkill(skillInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/skill?candidateId=${candidateId}`, skillInfo)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  addSkill(skillInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/skill/${candidateId}`, skillInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
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

  updateCertification(certificationInfo) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/certificate?candidateId=${candidateId}`, certificationInfo)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  addLanguage(languageInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/languages/${candidateId}`, languageInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

  addCertification(certificationInfo) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(certificationInfo);
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/certificate/${candidateId}`, certificationInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateLanguage(updateLanguage, data) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/languages?candidateId=${candidateId}`, updateLanguage)
        .then(resp => {
        }).catch(error => {
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

  addEmployment(employmentInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/employment/${candidateId}`, employmentInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateEmployment(employmentInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/employment?candidateId=${candidateId}`, employmentInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateEducation(educationInfo) {
    const candidateId = localStorage.getItem('candidateId')
    console.log(educationInfo);
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/education?candidateId=${candidateId}`, educationInfo)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  addEducation(educationInfo) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/education/${candidateId}`, educationInfo)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

}

export default new ApiServicesOrgCandidate();
