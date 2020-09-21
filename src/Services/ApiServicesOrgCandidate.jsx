import axios from 'axios'
import { apiBaseUrl } from '../Config.jsx'

import React, { Component } from 'react';

class ApiServicesOrgCandidate {

  fetchProfileInfo() {
    return (
      axios
        .get(apiBaseUrl + "/candidate/profileview/36")
        .then(Response => Response.data.responseObject)
    )
  }

}

export default new ApiServicesOrgCandidate();
