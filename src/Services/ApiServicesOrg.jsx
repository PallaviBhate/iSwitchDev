import axios from 'axios'
import {ApiBaseUrl, ApiHeader}  from '../Config.jsx'

import React, { Component } from 'react';
import { parseJSON } from 'jquery';



class ApiServicesOrg extends Component {

    getToken(){
        const token= JSON.parse(localStorage.getItem('userDetails')).authToken;
        const tokenHeader = {headers: { 'Content-Type': 'application/json','Authorization':'Bearer ' + token}}
        return tokenHeader;
    }
//1. Sending Signup details to backend
    postSignup (signupDetails) {
        return (
            axios
            .post(ApiBaseUrl + "/user/signup", signupDetails , ApiHeader)
            .then(Response => Response)
            )
        }


// //2. Sending Login details to backend and get Role
// putLogin (emailid, password) {
//     return (
//         axios
//           .put(`${ApiBaseUrl}/user/login`, {userName: emailid, password: password})
//           .then(resp => {
//               console.log(resp);
//               return resp;
//           } ).catch(error => {
//             console.log(error);
//           })
//       )
// }



//2. Sending Login details to backend and get Role
    putLogin (fields) {
        return(
            axios
            .put(ApiBaseUrl + "/user/login", {'password': fields.password, 'userName': fields.emailid } , ApiHeader)
            .then(Response => Response)
        )
       
    }

//3. Provider Functionalities

        //3.1 Downloading Sample CSV file
            fetchSampleFile (){
                return(
                    fetch (ApiBaseUrl + "/user/csvdownload", this.getToken())
                    .then(Response => Response)
                )
            }
        

        //3.2 Uploading CSV with Drag-Drop, File explore facilities
        postSampleFile (formdata, formheader){
            return(
                axios
                .post(ApiBaseUrl + "/user/uploadcsv", formdata, formheader)
                .then(Response => Response)
            )
        }

// 4. Manage User Functionalities
        
        //4.1 View User list- Manage User Component
        getViewAllUser() {
            const userId = JSON.parse(localStorage.getItem('userDetails')).id;
            return (
                axios
                .get(ApiBaseUrl + '/user/allUsersByRole/'+ userId , this.getToken())
                .then(Response => Response)
            )
        }

        //4.2 Add User-  Admin/User
        postAddUser(fields){
            return(
                axios
                .post(ApiBaseUrl +"/user/user" , fields, this.getToken())
                .then(Response => Response)
            )
        }

        //4.3 Edit User- Admin/User
        putEditUser(fields){
            return(
                axios
                .put(ApiBaseUrl+ "/user/user", fields, this.getToken())
                .then(Response => Response)
            )
        }

        //4.4 Delete User - Single User- Admin/User
        deleteUser(userId){
            return(
                axios
                .delete(ApiBaseUrl + "/user/userById/"+ userId, this.getToken())
                .then(Response => Response)
            )
        }

        //4.5 Delete User - Multiple Users- Admin/User
        deleteMultiUser(updatedUserId){
            console.log(ApiBaseUrl+ "/user/multipleUsersById/", {data:updatedUserId}, this.getToken())
            return(
                axios
                .delete(ApiBaseUrl+ "/user/multipleUsersById/", {data:updatedUserId}, this.getToken())
                .then(Response => Response)
            )    
    }

// 5. Recruiter Functionalities

        //5.1 Active Job- All jobs to view on main "Active-Job" page
        // getAllActiveJobs(){
        //     return{
        //         axios
        //         .get(ApiBaseUrl+)
        //         .then(Response => Response)
        //     }
        // }


}
export default ApiServicesOrg
