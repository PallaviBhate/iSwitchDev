import React  from 'react';
import $ from 'jquery'
import { Link } from "react-router-dom";


const LeftNav = ()=>{
    // this.menuClass = '';
    /* off-canvas sidebar toggle */
    // $('[data-toggle=offcanvas]').click(function(e) {
    //     e.preventDefault()
    //     $('.row-offcanvas').toggleClass('active');
    //     $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
    
    // });
    /* off-canvas sidebar toggle */

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    function toggleMenu()
    {
        console.log(this.menuClass.length);
        this.menuClass = (this.menuClass.length === 0) ? 'collapsed' : '';
        console.log(this.menuClass);
        console.log(this.menuClass.length);
      
    }
      
    return(
            
        <div id="wrapper">

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav" >
                <li className="sidebar-brand">
                    
                        <a href="#menu-toggle"  id="menu-toggle" style={{float:"right"}} >
                         <i className="fa fa-bars "  aria-hidden="true" aria-hidden="true"></i> 
                    </a>
                </li>
                <li> 
                <Link to = {'/providerDashboard'}><i className="fa fa-dashboard " aria-hidden="true"> </i> <span >Dashboard</span></Link>                    
                </li>
                <li>
                <Link to = {'/uploadProfile'}><i className="fa fa-user " aria-hidden="true"> </i> <span > Upload Profile</span></Link>
                </li>
                <li>
                <Link to = {'/ManageUser'}> <i className="fa fa-user-plus" aria-hidden="true"> </i> <span > Manage User</span></Link>
                </li>               
            </ul>
        </div>
        </div>
        
    )
}

export default LeftNav