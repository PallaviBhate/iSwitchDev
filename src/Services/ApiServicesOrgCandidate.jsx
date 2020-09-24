import axios from 'axios'
import { ApiBaseUrl } from '../Config.jsx'

import React, { Component } from 'react';

class ApiServicesOrgCandidate {

  fetchProfileInfo() {
    const userID = localStorage.getItem('candidateId')
    return (
      axios
        .get(`${ApiBaseUrl}/candidate/profileview/${userID}`)
        .then(Response => Response.data.responseObject)
    )
  }

}

export default new ApiServicesOrgCandidate();
