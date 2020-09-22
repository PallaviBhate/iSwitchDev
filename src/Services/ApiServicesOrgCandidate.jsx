import axios from 'axios'
import { ApiBaseUrl } from '../Config.jsx'

import React, { Component } from 'react';

class ApiServicesOrgCandidate {

  fetchProfileInfo() {
    return (
      axios
        .get(ApiBaseUrl + "/candidate/profileview/2")
        .then(Response => Response.data.responseObject)
    )
  }

}

export default new ApiServicesOrgCandidate();
