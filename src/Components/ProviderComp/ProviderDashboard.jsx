import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../Assets/css/Style.css'
import OverviewCard from '../CommonComp/Dashboard/OverviewCard'
import TopSkillsCard from '../CommonComp/Dashboard/TopSkillsCard';
import BarGraph from '../CommonComp/Dashboard/BarGraph';
//import { Link } from 'react-router-dom';

export default class ProviderDashboard extends Component {

	render() {
		return (
			<div>
				{/* Header Section */}

				<div class="Header">
					<div class="float-left logo_container col-xl-2">
						<img src="images/dashboard-assets/logo-white.png" class="logo" />
					</div>

					<div class="float-left">
						<label class="ml-4 mt-2 float-left">JOB :</label>
						<div class="btn-group btn-group-toggle float-left ml-2" data-toggle="buttons">
							<label class="btn btn_job_profile active">
								<input type="radio" name="options" id="option1" autocomplete="off" checked /> PROVIDER
				  </label>
							<label class="btn btn_job_profile">
								<input type="radio" name="options" id="option2" autocomplete="off" /> RECRUITER
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
									<a class="dropdown-item" >Profile</a>
									<a class="dropdown-item" >Setting</a>
									<a class="dropdown-item" >Logout</a>
								</div>
							</div>
						</li>
						<li class="ml-0">
							<img src="images/dashboard-assets/user-f.jpg" class="rounded-circle mt-1" width="40" height="40" />
						</li>
					</ul>

				</div>
				{/* Header Section */}

				<div class="container-fluid">
					<div class="row flex-xl-nowrap">
						{/* Side Navigation Bar */}

						<div class="col-12 col-md-3 col-xl-2 pl-0 pr-0">
							<nav class="">
								<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
								</button>

								<div class="" id="navbarSupportedContent">
									<ul class="navbar-nav flex-column mr-auto">
										<li class="nav-item active">
											<a class="nav-link">
												{/* <Link to="/"> */}
												<img src="images/dashboard-assets/dashboard-ico.svg" class="mr-2 float-left" />
												<span class="float-left">Dashboard</span>
												{/* </Link> */}
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link">
												{/* <Link to="/uploadProfile"> */}
												<img src="images/dashboard-assets/upload-profile-ico.svg" class="mr-2 float-left" />
												<span class="float-left">Upload Profile</span>
												{/* </Link> */}
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link">
												{/* <Link to="/manageUsers"> */}
												<img src="images/dashboard-assets/manage-profile-ico.svg" class="mr-2 float-left" />
												<span class="float-left">Manage User</span>
												{/* </Link> */}
											</a>
										</li>
									</ul>
								</div>

							</nav>
						</div>
						{/* Side Navigation Bar */}

						<section class="content_section col-12 col-md-9 col-xl-10 py-md-3 pl-md-4 bd-content">
							{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}

							<OverviewCard />
							<TopSkillsCard />
							<BarGraph />
							{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}

						</section>
					</div>
				</div>
			</div>
		)
	}
}
