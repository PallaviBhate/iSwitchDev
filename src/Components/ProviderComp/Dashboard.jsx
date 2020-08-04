import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
// import { Bar } from 'react-chartjs-2';

const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
    datasets: [
        {
            label: "Number of Profile Uploaded",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478, 133, 221, 783, 2478, 133, 221, 783, 2478]
        }, {
            label: "Number of Job Posted",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734, 408, 547, 675, 734, 408, 547, 675, 734]
        }, {
            label: "Number of Hired Candidates",
            backgroundColor: "#ccc",
            data: [205, 305, 400, 1200, 205, 305, 400, 1200, 205, 305, 400, 1200]
        }
    ]
}

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                {/* <!--Header Section--> */}
		<div class="Header">
			<div class="float-left logo_container col-xl-2">
				<img src="assets/dashboard-assets/logo-white.png" class="logo"/>
			</div>
			
			<div class="float-left">
				<label class="ml-4 mt-2 float-left">JOB :</label>
				<div class="btn-group btn-group-toggle float-left ml-2" data-toggle="buttons">
				  <label class="btn btn_job_profile active">
					<input type="radio" name="options" id="option1" autocomplete="off" checked/> PROVIDER
				  </label>
				  <label class="btn btn_job_profile">
					<input type="radio" name="options" id="option2" autocomplete="off"/> RECRUITER
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
			
		</div>
		{/* <!--Header Section--> */}
		
	<div class="container-fluid">
		<div class="row flex-xl-nowrap">
			{/* <!--Side Navigation Bar--> */}
			<div class="col-12 col-md-3 col-xl-2 pl-0 pr-0">
				<nav class="">
					<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="" id="navbarSupportedContent">
					<ul class="navbar-nav flex-column mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								<img src="assets/dashboard-assets/dashboard-ico.svg" class="mr-2 float-left"/>
								<span class="float-left">Dashboard</span>
							</a>
						</li>
						<li class="nav-item">
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

	
		{/* <!--Content Section--> */}
		<section class="content_section col-12 col-md-9 col-xl-10 py-md-3 pl-md-4 bd-content">
		{/* <!--Overview Section--> */}
			<div class="row ml-0 mr-1">
				<h4 class="wid100 ml-4 marT20">Overview</h4>
				<div class="col-12 col-sm-12 col-md-6 col-lg-4">
					<section class="uploadedProfile_section">
						<div class="media">
						  <img class="mr-3" src="assets/dashboard-assets/uploaded-profile.svg" alt="Profile Uploaded image" />
						  <div class="media-body">
							<h5 class="mt-0 overview_numbers">20345</h5>
							Number of profile uploaded.
							<img src="assets/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
						  </div>
						</div>
					</section>
				</div>
				<div class="col-12 col-sm-12 col-md-6 col-lg-4">
					<section class="activeProfile_section">
						<div class="media">
						  <img class="mr-3" src="assets/dashboard-assets/active-profile.svg" alt="Active Profile image" />
						  <div class="media-body">
							<h5 class="mt-0 overview_numbers">15145</h5>
							Number of active profiles.
							<img src="assets/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
						  </div>
						</div>
					</section>
				</div>
				<div class="col-12 col-sm-12 col-md-6 col-lg-4">
					<section class="hiredProfile_section">
						<div class="media">
						  <img class="mr-3 mt-2" src="assets/dashboard-assets/offer-ico.svg" alt="Hired Profile image" />
						  <div class="media-body">
							<h5 class="mt-0 overview_numbers">1345</h5>
							Number of hired profile.
							<img src="assets/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
						  </div>
						</div>
					</section>
				</div>
			</div>
		{/* <!--Overview Section--> */}
		
		{/* <!--TOP Skills section--> */}
			<div class="row ml-0 mr-1">
			{/* <!--TOP Skills published section--> */}
				<div class="col-12 col-sm-12 col-md-12 col-lg-6 pr-0">
					<h4 class="wid100 ml-3 marT30">TOP SKILLS Required</h4>
					<section class="skillPosted_section">
						<table class="table border-top-0">
							<thead>
								<tr>
									<th class="border-top-0 border-light">SKILLS</th>
									<th class="border-top-0 border-light"> Number of jobs posted</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/java_logo.jpg" width="30" height="30" class="rounded-circle"/>
										<span class="">JAVA</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/angular_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">Angular</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/nodejs_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">Node JS</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/android_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">Android</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
			{/* <!--TOP Skills published section-->	 */}
			{/* <!--TOP Skills Unfulfilled section-->	 */}
				<div class="col-12 col-sm-12 col-md-12 col-lg-6 pl-0">
					<h4 class="wid100 ml-3 marT30">TOP SKILLS Unfulfilled</h4>
					<section class="skillsUnfulfilled_section">
						<table class="table">
							<thead>
								<tr>
									<th class="border-top-0 border-light">SKILLS</th>
									<th class="border-top-0 border-light"> Number of jobs posted</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/mongodb_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">MONGO DB</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/python_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">PYTHON</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/php_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">PHP</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
								<tr>
									<td class="border-top-0">
										<img src="assets/dashboard-assets/swift_logo.png" width="30" height="30" class="rounded-circle"/>
										<span class="">SWIFT</span>
									</td>
									<td class="border-top-0">
										<meter value="6" min="0" max="10">6 out of 10</meter>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
			{/* <!--TOP Skills Unfulfilled section--> */}
			</div>
		{/* <!--TOP Skills section--> */}
		
		{/* <!--Monthly Reports Chart section-->	 */}
			<div class="row ml-0 mr-1">
				<div class="col col-sm-12 col-md-12 col-lg-12">
					<h4 class="wid100 ml-3 marT30">Monthly Report</h4>
					<section class="chart_section">
						<div class="wid10 float-left ml-3">
							<span class="Uploaded_number">58%</span>
							<span>UPLOADED</span>
						</div>
						<div class="wid10 float-left">
							<span class="posted_number">32%</span>
							<span>POSTED</span>
						</div>
						<div class="wid10 float-left">
							<span class="hired_number">10%</span>
							<span>HIRED</span>
						</div>
						<div class="dropdown float-right mr-2">
						  <button class="btn chart_section_btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Select Year
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">2020</a>
							<a class="dropdown-item" href="#">2019</a>
							<a class="dropdown-item" href="#">2018</a>
						  </div>
						</div>
						<div class="chart-container"  width="100" height="100">
							<canvas id="bar-chart-grouped"></canvas>
						</div>
					</section>
				</div>
			</div>
		{/* <!--Monthly Reports Chart section--> */}
		</section>
		{/* <!--Content Section--> */}
	</div>
</div>
{/* 
<Bar
                    type='bar'
                    data={state}
                    options={{
                        title: {
                            position: 'bottom',
                            display: true,
                            text: 'Population growth (millions)'
                        },
                        legend: {
                            position: 'bottom'
                        },
                        layout: {
              padding: {
                    top: 50,
                  left: 20,
                  right: 20
              }
            }
        }
          }

          />
          );
 */}
            </div>
        )
    }
}
