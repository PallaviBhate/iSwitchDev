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
				<header></header>

				<div class="container-fluid">
					<div class="row flex-xl-nowrap">
						{/* Side Navigation Bar */}

						<div className="col-12 col-md-3 col-xl-2 pl-0 pr-0">
							<nav className="">
								<button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<div className="" id="navbarSupportedContent">
									<ul className="navbar-nav flex-column mr-auto">
										<li className="nav-item active">
											<a className="nav-link">
												{/* <Link to="/"> */}
												<img src="images/dashboard-assets/dashboard-ico.svg" className="mr-2 float-left" />
												<span className="float-left">Dashboard</span>
												{/* </Link> */}
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">
												{/* <Link to="/uploadProfile"> */}
												<img src="images/dashboard-assets/upload-profile-ico.svg" className="mr-2 float-left" />
												<span className="float-left">Upload Profile</span>
												{/* </Link> */}
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">
												{/* <Link to="/manageUsers"> */}
												<img src="images/dashboard-assets/manage-profile-ico.svg" className="mr-2 float-left" />
												<span className="float-left">Manage User</span>
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
