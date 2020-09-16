import React  from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";

const CandidateLeftNav = ()=>{
    
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".maincontent").toggleClass("toggled");
    });
       
          
    return(
              
        <div id="wrapper" className="toggled">

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav" > 
                <li> 
                   <img src="/images/NavBar/logo.png" alt="" className="ml-4"/>                                 
                </li>
                <li className="sidebar-brand">                    
                        <a href="#"  id="menu-toggle">
                         <i className="fa fa-bars "  aria-hidden="true"></i> 
                    </a>
                </li>
                
                <li> 
                <Link to = {'/candidate/dashboard'}> <img src="/images/NavBar/dashboard_icon.png" alt="" className="left-nav-icon ml-4 mr-2"/> <span > Dashboard</span></Link>
                {/* <Link to = {'/providerDashboard'}><img src={dashboardlogo} alt="" className="mr-0"/> <span >Dashboard</span></Link>                     */}
                </li>
                {/* <li>
                <Link to = {'/uploadProfile'} className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user mr-1" aria-hidden="true"> </i> Interviews <b class="caret"></b></Link>
                <ul className="dropdown-menu">
                    <li><Link to = {'/uploadProfile'}>Invites</Link></li>
                    <li><Link to = {'/uploadProfile'}>Accepted</Link></li>
                </ul>
                </li> */}
                <li class="nav-item">
                    <a class="dropdown-toggle" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><img src="/images/NavBar/interviews.png" alt="" className="left-nav-icon ml-4 mr-2"/> <span class="d-none d-sm-inline">Interviews</span></a>
                    <div class="collapse" id="submenu1" aria-expanded="false">
                        <ul class="flex-column pl-2 nav">
                            <li class="nav-item"><a class="nav-link py-0" href="/candidate/interviews/invites"><img src="/images/NavBar/invites.png" alt="" className="left-nav-icon ml-4 mr-2" /><span className="ml-1">Invites</span></a></li>
                            <li class="nav-item"><a class="nav-link py-0" href="/candidate/interviews/accepted"><img src="/images/NavBar/accepted.png" alt="" className="left-nav-icon ml-4 mr-2"/><span className="ml-1">Accepted</span></a></li>
                        </ul>
                    </div>
                </li>
                <li>
                <Link to = {'/candidate/jobOffers'}> <img src="/images/NavBar/job_offer.png" alt="" className="left-nav-icon ml-4 mr-2"/> <span > Job Offer</span></Link>
                </li>     
                <li>
                <Link to = {'/candidate/searchJobs'}> <img src="/images/NavBar/job-search.png" alt="" className="left-nav-icon ml-4 mr-2"/> <span > Search Job</span></Link>
                </li>      
                <li>
                <Link to = {'/candidate/profile'}> <img src="/images/NavBar/profile.png" alt="" className="left-nav-icon ml-4 mr-2"/> <span > Profile</span></Link>
                </li>      
            </ul>
        </div>
        </div>
        
    )
}

export default CandidateLeftNav