import axios from 'axios'; 

import React,{Component} from 'react'; 

class UploadProfile extends Component { 

  constructor(props) {
		super(props);
	}
	
	downloadEmployeeData = () => {
		fetch('http://localhost:8080/https://www.pexels.com/photo/wood-field-animal-cute-4492255//download')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'aa.png';
					a.click();
				});
				//window.location.href = response.url;
		});
	}

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
          
              <div id="container">
              <h1>Download File using React App</h1>
              <h3>Download Employee Data using Button</h3>
              <button onClick={this.downloadEmployeeData}>Download</button>
              <p/>
              <h3>Download Employee Data using Link</h3>
              <a href="#" onClick={this.downloadEmployeeData}>Click here to downloadd sample file</a>
             </div>
             </div>
        ); 
      } 
} 

export default UploadProfile;
