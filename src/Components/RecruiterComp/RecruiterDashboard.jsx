import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../Assets/css/Style.css'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
//import RecruiterOverviewCard from '../CommonComp/DashboardComp/RecruiterOverviewCard';
import LeftNavProvider from '../CommonComp/LeftNavProvider';
import TopSkillsCard from '../CommonComp/DashboardComp/TopSkillsCard';
import BarGraph from '../CommonComp/DashboardComp/BarGraph';
import ScrollUpButton from "react-scroll-up-button";
import OverviewCardRecruiter from '../CommonComp/DashboardComp/OverviewCardRecruiter';


export default class RecruiterDashboard extends Component {
    constructor(props){
        super(props)
    }
    
    render() {  
        return (
            <div>    
                <div className="maincontent toggled">
                <HeaderAll></HeaderAll>
                
                <LeftNavProvider></LeftNavProvider>
                
                <div className="container-fluid">
                    <div className="row flex-xl-nowrap">
                        <section className="content_section col py-md-3 pl-md-4 bd-content">
                            
                            <OverviewCardRecruiter />
                            <TopSkillsCard />
                            <BarGraph />
                        </section>
                    </div>
                    <ScrollUpButton />
                </div>
            
                <Footer></Footer>
                </div>
            </div>
        )
    }
}
