
import axios from 'axios'; 

import React,{Component, Fragment} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

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
        var fileInput = document.getElementById('myFile');
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
        return(
          <Fragment>
    <div className="container-fluid">
        <div className="row flex-xl-nowrap">
            <div className="col-12 col-md-3 col-xl-2 pl-0 pr-0">
                <nav className="">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src="images/Dashboard-assets/dashboard-ico.svg" className="mr-2 float-left"/>
                                <span className="float-left">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <img src="images/Dashboard-assets/upload-profile-ico.svg" className="mr-2 float-left"/>
                                <span className="float-left">Upload Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src="images/Dashboard-assets/manage-profile-ico.svg" className="mr-2 float-left"/>
                                <span className="float-left">Manage User</span>
                            </a>
                        </li>
                    </ul>
                  </div>
                </nav>
            </div>

    
        
        <section className="content_section col-12 col-md-9 col-xl-10 py-md-3 pl-md-4 bd-content">
            <div className="row ml-0 mr-1">
                <h5 className="wid100 ml-2 marT20">Bulk Profile Upload</h5>
                <h6 className="marT20 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </h6>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 marT20 pl-0 pr-0">
                    <section className="BulkUpload_section float-left">
                        <div className="wid50 float-left border-right p-4">
                            <img src="images/Dashboard-assets/cloud-upload.svg" className="cloud_upload_logo"/>
                            <p className="text-center">Drag and Drop a file here</p>
                            <p className="text-center">or</p>
                            <form action="">
                                <div className="text-center"/>
                                    <input type="file" id="myFile" name="filename" accept=".csv" files multiple onChange={this.onFileChange}/> 
                                    <img src="images/Dashboard-assets/csv.svg" />
                                    <span>CSV File</span>
                            </form>
                            <p className="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className="download_sample_link d-block text-center" href="#" onClick={this.downloadEmployeeData}>Download CSV file template</a>
                        </div>
                        <div className="wid50 float-left p-4">
                            <img src="images/Dashboard-assets/cloud-upload.svg" className="cloud_upload_logo"/>
                            <p className="text-center">Drag and Drop a file here</p>
                            <p className="text-center">or</p>
                            <form action="">
                                <div className="text-center"/>
                                    <label className="myLabel" />
                                        <input type="file" id="myFile" name="filename" accept=".csv" files multiple/>
                                    <img src="images/Dashboard-assets/csv.svg" />
                                    <span>ZIP File</span>
                            </form>
                            <p className="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className="download_sample_link d-block text-center">Download sample file</a>
                        </div>
                    </section>
                    <div className="ml-2 marT20 float-left">
                        <button type="button" className="btn btn_bulkUpload" onClick={this.fileValidation}>Upload</button>
                    </div>
                </div>
            </div>
           </section>
        </div>
        </div>
         </Fragment>
        );
    }
}

export default UploadProfile; 


