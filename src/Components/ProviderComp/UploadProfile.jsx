import axios from 'axios'; 

import React,{Component, Fragment} from 'react'; 



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
            
		
		<header class="Header">
			<div class="float-left logo_container col-xl-2">
				<img src="assets/dashboard-assets/logo-white.png" class="logo"/>
			</div>
			
			<div class="float-left mt-2">
				<label class="ml-4 mt-3">JOB :</label>
				<div class="btn-group btn-group-toggle" data-toggle="buttons">
				  <label class="btn btn_job_profile active">
					<input type="radio" name="options" id="option1" autocomplete="off" checked> PROVIDER</input>
				  </label>
				  <label class="btn btn_job_profile">
					<input type="radio" name="options" id="option2" autocomplete="off"> RECRUITER </input>
				  </label>
				</div>
			</div>
			<ul class="profile_section">
				<li class="mr-0">
					<div class="dropdown">
					  <button class="btn profile_btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Rosa Dodson
					  </button>
					  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="#">Profile</a>
						<a class="dropdown-item" href="#">Setting</a>
						<a class="dropdown-item" href="#">Logout</a>
					  </div>
					</div>
				</li>
				<li class="ml-0">
					<img src="assets/dashboard-assets/user-f.jpg" class="rounded-circle mt-1" width="40" height="40" />
				</li>
			</ul>
			
		</header>
		
		
	<div class="container-fluid">
		<div class="row flex-xl-nowrap">
			
			<div class="col-12 col-md-3 col-xl-2 pl-0 pr-0">
				<nav class="">
					<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="" id="navbarSupportedContent">
					<ul class="navbar-nav flex-column mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">
								<img src="assets/dashboard-assets/dashboard-ico.svg" class="mr-2 float-left"/>
								<span class="float-left">Dashboard</span>
							</a>
						</li>
						<li class="nav-item active">
							<a class="nav-link" href="#">
								<img src="assets/dashboard-assets/upload-profile-ico.svg" class="mr-2 float-left"/>
								<span class="float-left">Upload Profile</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<img src="assets/dashboard-assets/manage-profile-ico.svg" class="mr-2 float-left"/>
								<span class="float-left">Manage User</span>
							</a>
						</li>
					</ul>
				  </div>
				  
				</nav>
			</div>

	
		
		<section class="content_section col-12 col-md-9 col-xl-10 py-md-3 pl-md-4 bd-content">
		
			<div class="row ml-0 mr-1">
				<h5 class="wid100 ml-2 marT20">Bulk Profile Upload</h5>
				<h6 class="marT20 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</h6>
				<div class="col-12 col-sm-12 col-md-12 col-lg-12 marT20 pl-0 pr-0">
					<section class="BulkUpload_section float-left">
						<div class="wid50 float-left border-right p-4">
							<img src="assets/dashboard-assets/cloud-upload.svg" class="cloud_upload_logo"/>
							<p class="text-center">Drag and Drop a file here</p>
							<p class="text-center">or</p>
							<form action="">
								<div class="text-center">
									<input type="file" id="myFile" name="filename" accept=".csv" files multiple onChange={this.onFileChange}> </input>
									<img src="assets/dashboard-assets/csv.svg" />
									<span>CSV File</span>
								</div>
							</form>
							<p class="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<a class="download_sample_link d-block text-center" href="#" onClick={this.downloadEmployeeData}>Download sample file</a>
						</div>
						<div class="wid50 float-left p-4">
							<img src="assets/dashboard-assets/cloud-upload.svg" class="cloud_upload_logo"/>
							<p class="text-center">Drag and Drop a file here</p>
							<p class="text-center">or</p>
							<form action="">
								<div class="text-center">
									<label class="myLabel">
										<input type="file" id="myFile" name="filename" accept=".csv" files multiple></input>
									</label>
									<img src="assets/dashboard-assets/csv.svg" />
									<span>CSV File</span>
								</div>
							</form>
							<p class="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<a class="download_sample_link d-block text-center">Download sample file</a>
						</div>
					</section>
					<div class="ml-2 marT20 float-left">
						<button type="button" class="btn btn_bulkUpload" onClick={this.fileValidation}>Upload</button>
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
