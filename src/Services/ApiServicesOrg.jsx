import axios from 'axios'
import {apiBaseUrl, ApiHeader}  from '../Config.jsx'

import React, { Component } from 'react';

class ApiServicesOrg extends Component {

//1. Sending Signup details to backend
    postSignup (signupDetails) {
        return (
            axios
            .post(apiBaseUrl + "/user/signup", signupDetails , ApiHeader)
            .then(Response => Response.data.responseObject)
            )
        }



//2. Sending Login details to backend and get Role
    putLogin (emailid, password) {
        return(
            axios
            .put(apiBaseUrl + "/user/login/"+ emailid +"/"+ password, ApiHeader)
            .then(Response => Response.data.responseObject)
        )
    }

//3. Provider Functionalities

        //3.1 Downloading Sample CSV file
            fetchSampleFile (){
                return(
                    axios
                    .get(apiBaseUrl + "/user/csvdownload")
                    .then(Response => Response.data.responseObject)
                )
            }
        


}
export default ApiServicesOrg
