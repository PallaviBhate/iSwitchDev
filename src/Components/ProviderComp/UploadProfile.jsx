import axios from 'axios'; 

import React,{Component} from 'react';


class UploadProfile extends Component { 

	state = { 
  
        // Initially, no file is selected 
        selectedFile: null
      }; 
       
      // On file select (from the pop up) 
      onFileChange = event => { 
       
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
      };        
        // On file upload (click the upload button) 
        onFileUpload = () => { 
       
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        //axios.post("api/uploadfile", formData); 
      }; 
        // Csv validation check on upload button
        fileValidation = () =>{
        var fileInput = document.getElementById('file');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.csv)$/i;
        if(!allowedExtensions.exec(filePath)){
            alert('Please upload file having extensions .csv only.');
            fileInput.value = '';
            return false;
        }
        else{
              this.onFileUpload()
            }
        }
       
     
      render() { 
    
        return ( 
          <div> 
              <h1> 
                Uploading Document
              </h1> 
              <h3> 
                File Upload using React! 
              </h3> 
              <div> 
                  <input type="file" id="file"  accept=" .csv" onChange={this.onFileChange} /> 
                  <button   onClick={this.fileValidation}> 
                    Upload! 
                  </button> 
              </div> 
          </div> 
        ); 
      } 
} 

export default UploadProfile; 
