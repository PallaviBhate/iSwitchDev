import React from 'react';
import $ from 'jquery'
import { Link, NavLink } from "react-router-dom";

const CandidateLeftNav = () => {

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".maincontent").toggleClass("toggled");
    });

    //To move dot to active page
    const isActive = (path, match, location) => !!(match || path === location.pathname);
    return (
        <div id="wrapper" className="toggled">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav" >
                    <li className="sidebar-brand">
                        <img src="/images/NavBar/logo.png" alt="" className="ml-3" />
                    </li>
                    <li>
                        <a href="#" id="menu-toggle">
                            <i className="fa fa-bars mr-1" aria-hidden="true"></i>
                            <span className="menuText">Menu</span>
                        </a>
                    </li>
                    <li data-toggle="tooltip" data-placement="right" title="Dashboard">
                        <NavLink to={'/candidate/Dashboard'} 
                                 activeClassName="active"
                                 isActive={isActive.bind(this, '/candidate/Dashboard')}>
                            <i><img src="/images/Candidate-Navbar-assets/dashboard-icon.svg" aria-hidden="true" /></i>
                            <span className="menuText">Dashboard</span>
                        </NavLink>
                    </li>
                     <li data-toggle="tooltip" data-placement="right" title="Interviews">
                        <Link class="subMenu" id="navbarDropdown" role="button"
                            data-toggle="collapse" data-target="#submenu1sub1">
                            <i><img src="/images/Candidate-Navbar-assets/interviews-icon.svg" aria-hidden="true" /></i>
                             <span className="menuText">Interviews</span>
                        </Link>
                        <div className="collapse" id="submenu1sub1" aria-expanded="false">
                            <ul className="flex-column nav submenuLink">
                                <li data-toggle="tooltip" data-placement="right" title="Invites">
                                    <NavLink class="dropdown-item" to={"/candidate/invites"} 
                                    activeClassName="active"
                                    isActive={isActive.bind(this,'/candidate/invites')}>
                                        <i aria-hidden="true"></i>
                                        <span className="menuText">Invites</span>
                                    </NavLink>
                                </li>
                                <li data-toggle="tooltip" data-placement="right" title="Accepted">
                                    <NavLink class="dropdown-item" to={"/candidate/Invites"}
                                    activeClassName="active"
                                    isActive={isActive.bind(this, '/candidate/Invites')}>
                                    <i aria-hidden="true"></i>
                                    <span className="menuText">Accepted</span>
                                    </NavLink>
                                </li>                              
                            </ul>   
                        </div>
                    </li>
                     
                    <li data-toggle="tooltip" data-placement="right" title="Job Offers">
                        <NavLink to={'/candidate/jobOffers'}
                        activeClassName="active"
                        isActive={isActive.bind(this, '/jobOffers')}>
                            <i><img src="/images/Candidate-Navbar-assets/job-offers.svg" aria-hidden="true" /></i>
                            <span className="menuText">Job Offers</span></NavLink>   
                    </li>

                    <li data-toggle="tooltip" data-placement="right" title="Search Jobs">
                        <NavLink to={'/candidate/searchJob'}
                        activeClassName="active"
                        isActive={isActive.bind(this,'/searchJob')}>
                           <i><img src="/images/Candidate-Navbar-assets/job-search.svg" aria-hidden="true"></img></i>
                            <span className="menuText">Search Jobs</span></NavLink>   
                    </li>
                    <li data-toggle="tooltip" data-placement="right" title="Profile">
                        <NavLink to={'/candidate/profile'}
                        activeClassName="active"
                        isActive={isActive.bind(this,'/profile')}>
                            <i><img src="/images/Candidate-Navbar-assets/profile.svg" aria-hidden="true"></img></i>
                            <span className="menuText">Profile</span></NavLink>   
                    </li>
                </ul>
            </div>
        
        </div>

    )
}

export default CandidateLeftNav