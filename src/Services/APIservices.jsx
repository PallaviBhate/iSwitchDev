import axios from 'axios'
import apiBaseUrl from '../Config.jsx'
import { configure } from '@testing-library/react'
//1. checking User is registerd user before Login:-   
const checkUser= (loginParas)=>{
    return(
 axios    
    .post( apiBaseUrl+ "/user/login", loginParas)
    .then(Response=>{console.log(Response)})
    .catch(error=>{console.log(error)})
    )
}

//2. Sending Signup details to backend
const saveSignupDetails= (signUpDetails)=>{
    return(
     axios    
        .post("URL", signUpDetails)
        .then(Response=>{console.log(Response)})
        .catch(error=>{console.log(error)})  
    )
}

//3. UploadProfileCSV 
const uploadCSV= (csvFileDetails)=>{
    return(
     axios    
        .post("URL", csvFileDetails)
        .then(Response=>{console.log(Response)})
        .catch(error=>{console.log(error)})  
    )
}