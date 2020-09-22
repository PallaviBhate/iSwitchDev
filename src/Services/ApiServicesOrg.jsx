import axios from 'axios'
import {ApiBaseUrl, ApiHeader}  from '../Config.jsx'

import React, { Component } from 'react';

class ApiServicesOrg extends Component {

//1. Sending Signup details to backend
    postSignup (signupDetails) {
        return (
            axios
            .post(ApiBaseUrl + "/user/signup", signupDetails , ApiHeader)
            .then(Response => Response)
            )
        }



//2. Sending Login details to backend and get Role
    putLogin (emailid, password) {
        return(
            axios
            .put(ApiBaseUrl + "/user/login/"+ emailid +"/"+ password, ApiHeader)
            .then(Response => Response)
        )
    }

//3. Provider Functionalities

        //3.1 Downloading Sample CSV file
            fetchSampleFile (){
                return(
                    fetch (ApiBaseUrl + "/candidate/csvdownload", ApiHeader)
                    .then(Response => Response)
                )
            }
        

        //3.2 Uploading CSV with Drag-Drop, File explore facilities
        postSampleFile (formdata, formheader){
            return(
                axios
                .post(ApiBaseUrl + "/candidate/uploadcsv", formdata, formheader)
                .then(Response => Response)
            )
        }

// 4. Manage User Functionalities
        
        //4.1 View User list- Manage User Component
        getViewAllUser() {
            const userId = JSON.parse(localStorage.getItem('userDetails')).id;
            return (
                axios
                .get(ApiBaseUrl + '/user/allUsersByRole/'+ userId , ApiHeader)
                .then(Response => Response)
            )
        }

        //4.2 Add User-  Admin/User
        postAddUser(fields){
            return(
                axios
                .post(ApiBaseUrl +"/user/user" , fields, ApiHeader)
                .then(Response => Response)
            )
        }

        //4.3 Edit User- Admin/User
        putEditUser(fields){
            return(
                axios
                .put(ApiBaseUrl+ "/user/user", fields, ApiHeader)
                .then(Response => Response)
            )
        }

        //4.4 Delete User - Single User- Admin/User
        deleteUser(userId){
            return(
                axios
                .delete(ApiBaseUrl + "/user/userById/"+ userId, ApiHeader)
                .then(Response => Response)
            )
        }

        //4.5 Delete User - Multiple Users- Admin/User
        deleteMultiUser(updatedUserId){
            return(
                axios
                .delete(ApiBaseUrl+ "/user/multipleUsersById" , {data:updatedUserId}, ApiHeader)
                .then(Response => Response)
            )    
    }
}
export default ApiServicesOrg
