import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../Assets/css/Style.css'
import OverviewCard from '../CommonComp/Dashboard/OverviewCard'
import TopSkillsCard from '../CommonComp/Dashboard/TopSkillsCard';
import BarGraph from '../CommonComp/Dashboard/BarGraph';
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import LeftNav from '../CommonComp/LeftNav'
import UploadProfile from '../ProviderComp/UploadProfile'

//import { Link } from 'react-router-dom';

export default class ProviderDashboard extends Component {
	constructor(props){
        super(props)
        this.state = {
        }
    }
    onClick = () => {
        this.props.history.push("/");
      };
  

	render() {
		const details= localStorage.getItem('emaildetails')
		return (
			<div>
				<LeftNav></LeftNav>
				<div className="maincontent toggled">
				<HeaderAll></HeaderAll>
				{/* <UploadProfile/> */}
				<div className="container-fluid">
					<div className="row flex-xl-nowrap">
						<section className="content_section col-12 col-md-9 col-xl-10 py-md-3 pl-md-4 bd-content">
							{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}
							 {/* To display login User Details */}
<h6>Welcome {details}</h6>
							<OverviewCard />
							<TopSkillsCard />
							<BarGraph />
							{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}

						</section>
					</div>
				</div>
			
				<Footer></Footer>
				</div>
			</div>
		)
	}
}
