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

  updateProfileInfo(profileInfo) {
    console.log(profileInfo)
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/candidateinfo/`, profileInfo)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateSkill(skillInfo) {
    console.log(skillInfo)
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/skill/`)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

  addSkill(skillInfo) {
    console.log('skillInfo', skillInfo)
    return (
      axios
        .post(`${ApiBaseUrl}/candidate/skill/`)
        .then(resp => {
          console.log(resp)
        }).catch(error => {
          console.log(error);
        })
    )
  }

  updateLanguage(updateLanguage) {
    const candidateId = localStorage.getItem('candidateId')
    return (
      axios
        .put(`${ApiBaseUrl}/candidate/languages/?candidateId=${candidateId}`, updateLanguage)
        .then(resp => {
        }).catch(error => {
          console.log(error);
        })
    )
  }

}

export default new ApiServicesOrgCandidate();
