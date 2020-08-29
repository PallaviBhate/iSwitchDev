import axios from 'axios'; 

import React,{Component, Fragment} from 'react'; 
import {Link} from 'react-router-dom'
import Toast from 'light-toast';
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import Dropzone from 'react-dropzone';

class UploadProfile extends Component {

    // constructor(props) {
    //     super(props);
    // }
    
    // downloadEmployeeData = () => {
    //     fetch('http://localhost:8080/https://www.pexels.com/photo/wood-field-animal-cute-4492255//download')
    //         .then(response => {
    //             response.blob().then(blob => {
    //                 let url = window.URL.createObjectURL(blob);
    //                 let a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = 'aa.png';
    //                 a.click();
    //             });
    //             //window.location.href = response.url;
    //     });
    // }
    state = { 
          // Initially, no file is selected 
        selectedFile: ''
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
          "file", 
            this.state.selectedFile, 
         
        );   
        // Details of the uploaded file 
       
        // Request made to the backend api 
        // Send formData object 
        const options = { 
            headers: { 
            'Content-Type':'multipart/form-data',
            } 
        };
            
        axios
        .post("https://techm-jobzilla.herokuapp.com/jobs/user/uploadcsv", formData , options) 
        .then(Response=>{console.log(Response)})
        .catch(error=>{console.log(error)})

      }; 

        // Csv validation check on upload button
        fileValidation = () =>{
        var fileInput = document.getElementById('myFile');
        var filePath = fileInput.value;
        if(filePath!=''){
            var allowedExtensions = /(\.csv)$/i;
            if(!allowedExtensions.exec(filePath)){
                Toast.info('Please upload file having extensions .csv only.',4000);
                fileInput.value = '';
                return false;
            }
            else{
                  this.onFileUpload()
                  Toast.info('File Uploaded Successfully',4000);
                }   
            }
            else{
                return Toast.info('Please select file first.',4000);
            }
            }

        // var allowedExtensions = /(\.csv)$/i;
        // if(!allowedExtensions.exec(filePath)){
        //     alert('Please upload file having extensions .csv only.');
        //     fileInput.value = '';
        //     return false;
        // }
        // else{
        //       this.onFileUpload()
        //     }
        // }

        uploadFile=(acceptedFiles)=> {
            const formData = new FormData(); 
           
             const options = { 
                headers: { 
                'Content-Type':'multipart/form-data',
                } 
            };
            formData.append( 
                "file", 
                acceptedFiles[0], 
               
              );   
             
            axios
            .post("https://techm-jobzilla.herokuapp.com/jobs/user/uploadcsv", formData,options) 
            .then(Response=>{console.log(Response)})
            .catch(error=>{console.log(error)})
            
           
          }
   
    render() {
        return(
            <Fragment>
                <HeaderAll></HeaderAll>
                <div className="container-fluid">
                    <div className="row  main">
                        {/* Content on the page */}
                        <section className="content_section">
                            <div className="ml-0 mr-1">
                                <h5 className="font-weight-400 mt-3">Bulk Profile Upload</h5>
                                <h6 className="mt-3 font-weight-400">
                                    Bulk Upload provides the ability to add Candidate profiles who are getting released from their current organization to the digital workplace. Bulk uploading requires you to provide the Candidate information in a CSV formatted text file and also upload the resumes in zip file only.
                                </h6>
                                <section className="white-middle-section mt-5">
                                    <div className="row">
                                        {/* CSV file upload */}
                                        {/* <div className="col-md-6 border-right p-4"> */}
                                        <div className="col-md-6 offset-md-3 p-4">
                                            <img src="images/Dashboard-assets/cloud-upload.svg" alt="cloud upload" className="cloud_upload_logo"/>
                                            <div className="text-center mt-5">
                                            <Dropzone
                                             onDrop={this.uploadFile}
                                            accept=".csv"
                                            >
                                            {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
                                            /* const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize; */
                                            return (
                                                <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                {!isDragActive && 'Click here or drop a file to upload!'}
                                                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                                                {isDragReject && "File type not accepted, sorry!"}
                                               {/*  {isFileTooLarge && (
                                                    <div className="text-danger mt-2">
                                                    File is too large.
                                                    </div>
                                                )} */}
                                                </div>
                                            )}
                                            }
                                            </Dropzone>
                                                 </div>
                                            {/* <p className="text-center pt-4 mb-0">Drag and drop a file here</p> */}
                                            <p className="text-center">or</p>
                                            <form action="">
                                                <div className="text-center d-flex justify-content-center">
                                                <div class="file-field d-flex-inline">
                                                    <div class="btn btn-primary btn-sm float-left waves-effect waves-light">
                                                        <span>Choose file</span>
                                                        <input type="file" id="myFile" name="filename" accept=".csv" files multiple onChange={this.onFileChange} />
                                                    
                                                    </div>
                                                    <div class="file-path-wrapper">
                                                        <input class="file-path validate" type="text" value={this.state.selectedFile.name} placeholder="No file choosen"/> 
                                                    </div>
                                                </div>
                                                <div className="d-flex-inline">
                                                    <img src="images/Dashboard-assets/csv.svg" className="pt-1" alt="csv icon" />
                                                    <span class="pl-2 fontMiddle">CSV File</span>
                                                </div>
                                            
                                            </div>
                                            </form>
                                            <p className="text-center mt-4">Upload the CSV file with candidate details here. All fields in the CSV file are mandatory for successful creation of Candidate profile.</p>
                                            <a className="download_sample_link d-block text-center" href="Samples/JobZilla.csv">Download CSV file template</a>
                                        </div>
                                        {/* ZIp file upload section */}
                                        {/* <div className="col-md-6  p-4">
                                            <img src="images/Dashboard-assets/cloud-upload.svg" alt="cloud upload icon" className="cloud_upload_logo"/>
                                            <p className="text-center pt-4 mb-0">Drag and Drop a file here</p>
                                            <p className="text-center">or</p>                                        
                                            <div className="text-center d-flex justify-content-center">
                                                <div class="file-field d-flex-inline">
                                                    <div class="btn btn-primary btn-sm float-left waves-effect waves-light">
                                                        <span>Choose file</span>
                                                        <input type="file" id="myFile" name="filename" accept=".csv" files multiple onChange={this.onFileChange} />
                                                    
                                                    </div>
                                                    <div class="file-path-wrapper">
                                                        <input class="file-path validate" type="text" value={this.state.selectedFile.name} placeholder="No file choosen"/> 
                                                    </div>
                                                </div>
                                                <div className="d-flex-inline">
                                                    <img src="images/Dashboard-assets/csv.svg" className="pt-1" alt="csv icon" />
                                                    <span class="pl-2 fontMiddle">ZIP File</span>
                                                </div>
                                            
                                            </div>
                                            <p className="text-center mt-4">Upload the Zip file with candidate resumes here.</p>
                                            <a className="download_sample_link d-block text-center">Download sample file</a>
                                            
                                        </div> */}
                                    </div>    
                                </section>
                                <div className="ml-2 marT20">
                                    <button type="button" className="btn btn-blue" onClick={this.fileValidation}>Upload</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default UploadProfile; 
