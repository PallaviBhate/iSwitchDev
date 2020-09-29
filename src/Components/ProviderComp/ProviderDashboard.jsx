import React, { Component } from 'react'
//import OverviewCard from '../CommonComp/DashboardComp/OverviewCard'
import TopSkillsCard from '../CommonComp/DashboardComp/TopSkillsCard';
import BarGraph from '../CommonComp/DashboardComp/BarGraph';
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import LeftNavProvider from '../CommonComp/LeftNavProvider'
import OverviewCardProvider from '../CommonComp/DashboardComp/OverviewCardProvider';
//import UploadProfile from '../ProviderComp/UploadProfile'

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
				<LeftNavProvider></LeftNavProvider>
				<div className="maincontent toggled">
				<HeaderAll></HeaderAll>
				{/* <UploadProfile/> */}
				<div className="container-fluid">
					<div className="row flex-xl-nowrap">
						<section className="content_section col py-md-3 pl-md-4 bd-content">
							{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}
							 {/* To display login User Details */}
							<OverviewCardProvider />
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
