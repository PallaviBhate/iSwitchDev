import React  from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";

const LeftNav = ()=>{
    
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
                   <img src="images/NavBar/logo.png" alt="" className="ml-4"/>                                 
                </li>
                <li className="sidebar-brand">                    
                        <a href="#"  id="menu-toggle">
                         <i className="fa fa-bars "  aria-hidden="true"></i> 
                    </a>
                </li>
                
                <li> 
                <Link to = {'/providerDashboard'}><i className="fa fa-dashboard mr-1" aria-hidden="true"> </i> <span >Dashboard</span></Link>                    
                {/* <Link to = {'/providerDashboard'}><img src={dashboardlogo} alt="" className="mr-0"/> <span >Dashboard</span></Link>                     */}
                </li>
                <li>
                <Link to = {'/uploadProfile'}><i className="fa fa-user mr-1" aria-hidden="true"> </i> <span > Upload Profile</span></Link>
                </li>
                <li>
                <Link to = {'/ManageUser'}> <i className="fa fa-user-plus mr-1" aria-hidden="true"> </i> <span > Manage User</span></Link>
                </li>               
            </ul>
        </div>
        </div>
        
    )
}

export default LeftNav