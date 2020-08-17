import axios from 'axios'
import apiBaseUrl from '../Config.jsx'


//1. checking User is registerd user before Login:-   
export const checkUser= (emailID, password)=>{
    return(
 axios    
    .post( apiBaseUrl+ "/user/login", {data: userName=emailID, password=password})
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
}
//4. Sending Dashboard details to backend
