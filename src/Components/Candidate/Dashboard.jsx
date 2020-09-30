import React, { Component } from 'react';
//import OverviewCard from '../CommonComp/DashboardComp/OverviewCard';
import TopSkillsCard from '../CommonComp/DashboardComp/TopSkillsCard';
import RecentMatches from '../CommonComp/DashboardComp/RecentMatches';
import Footer from '../CommonComp/Footer';
import LeftNavCandidate from '../CommonComp/LeftNavCandidate'
import HeaderAll from '../CommonComp/HeaderAll';
import ScrollUpButton from "react-scroll-up-button";
import OverviewCardCandidate from '../CommonComp/DashboardComp/OverviewCardCandidate';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<LeftNavCandidate></LeftNavCandidate>
				<div className="maincontent toggled">
					<HeaderAll isCandidate={true}></HeaderAll>
					<div className="container-fluid">
						<div className="row flex-xl-nowrap">
							<section className="content_section col py-md-3 pl-md-4 bd-content">
								{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}
								{/* To display login User Details */}
								<OverviewCardCandidate />
								<TopSkillsCard />
								<RecentMatches />
								{/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}

							</section>
						</div>
						<ScrollUpButton />
					</div>

					<Footer></Footer>
				</div>
			</div>
		);
	}
}

export default Dashboard  