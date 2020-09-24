import React from 'react';
import $ from 'jquery'
import { Link, NavLink } from "react-router-dom";

const LeftNavProvider = () => {

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".maincontent").toggleClass("toggled");
    });

    //To move white dot to active page
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return (
        <div id="wrapper" className="toggled">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav" >
                    <li className="sidebar-brand">
                        <img src="images/NavBar/logo.png" alt="" className="ml-3" />
                    </li>
                    <li>
                        <a href="#" id="menu-toggle">
                            <i className="fa fa-bars mr-1" aria-hidden="true"></i>
                            <span className="menuText">Menu</span>
                        </a>
                    </li>
                    {/** 
                       If Provider toggle is active then provider Dashboard will open and 
                       if Recruiter toggle is active then Recruiter Dashboard will through Navbar 
                      **/}

                    {localStorage.getItem('status') === "recruiter" ?
                        (<li data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink to={'/recruiterDashboard'}
                                activeClassName="active"
                                isActive={isActive.bind(this, '/recruiterDashboard')}>
                                <i><img src="images/Candidate-Navbar-assets/dashboard-icon.svg" aria-hidden="true" /></i>
                                <span className="menuText">Dashboard</span>
                            </NavLink>
                        </li>)
                        :
                        (<li data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink to={'/providerDashboard'}
                                activeClassName="active"
                                isActive={isActive.bind(this, '/providerDashboard')}>
                                <i><img src="images/Candidate-Navbar-assets/dashboard-icon.svg" aria-hidden="true" /></i>
                                <span className="menuText">Dashboard</span>
                            </NavLink>
                        </li>)
                    }

                    {/** If provider toggle is active then upload profile is displayed in navbar and
                         if recruiter toggle is active then upload profile is replaced with Jobs dropdown
                         in left navigation bar
                    **/}
                    {localStorage.getItem('status') === "recruiter" ?
                        (
                            <li data-toggle="tooltip" data-placement="right" title="Jobs">
                                <NavLink class="subMenu" id="navbarDropdown" role="button" to={"#"}
                                    data-toggle="collapse" data-target="#submenu1sub1">
                                    <i><img src="images/Candidate-Navbar-assets/Recruiter-Jobs-icon.svg" aria-hidden="true" /></i>
                                    <span className="menuText">Jobs</span>
                                </NavLink>
                                <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                    <ul className="flex-column nav submenuLink">
                                        <li data-toggle="tooltip" data-placement="right" title="Active Jobs">
                                            <NavLink class="dropdown-item" to={"/activeJobs"}  >
                                                <i><img src="images/Candidate-Navbar-assets/Recruiter-active-jobs-icon.svg" aria-hidden="true" /></i>
                                                <span className="menuText">Active Jobs</span>
                                            </NavLink>
                                        </li>
                                        <li data-toggle="tooltip" data-placement="right" title="ClosedJobs">
                                            <NavLink class="dropdown-item" to={"/closedJobs"}>
                                                <i><img src="images/Candidate-Navbar-assets/Recruiter-closed-job-icons.svg" aria-hidden="true" /></i>
                                                <span className="menuText">Closed Jobs</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        )
                        :
                        (<li>
                            <NavLink to={'/uploadProfile'}
                                activeClassName="active"
                                isActive={isActive.bind(this, '/uploadProfile')}>
                                <i><img src="images/Candidate-Navbar-assets/upload-profile-ico.svg" aria-hidden="true" /></i>
                                <span className="menuText">Upload Profile</span>
                            </NavLink>
                        </li>)
                        }
                    <li>
                        <NavLink to={'/ManageUser'}
                            activeClassName="active"
                            isActive={isActive.bind(this, '/ManageUser')}>
                            <i><img src="images/Candidate-Navbar-assets/profile.svg" aria-hidden="true" /></i>
                            <span className="menuText">Manage User</span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavProvider