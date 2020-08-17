import React, {useState} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Link } from "react-router-dom";

const LeftNav =()=>{
      const [visibleLeft, setVisibleLeft] = useState(false);
    return(
        <div>
              <Sidebar visible={visibleLeft} style={{background : 'blue'}} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                <h2 style={{fontWeight:'normal', color:'white'}}>Left Sidebar</h2>
                {/* Add Jobzilla Side Nav Here */}
                {/* <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => setVisibleLeft(false)} label="Cancel" className="p-button-secondary"/> */}
                 <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav flex-column mr-auto">
                        <li className="nav-item" className="mb-4">
                            <a className="nav-link">
                                <img src="images/Dashboard-assets/dashboard-ico.svg" className="mr-2 float-left"/>
                                {/* <span className="float-left" style={{color:'white'}}>Dashboard</span> */}  
                            </a>
                            <Link to={'/providerDashboard'} className="float-left" style={{color:'white'}}>Dashboard</Link>
                        </li>
                        <li className="nav-item active" className="mb-4">
                            <a className="nav-link">
                                <img src="images/Dashboard-assets/upload-profile-ico.svg" className="mr-2 float-left"/>
                            </a>
                            <Link to={'/uploadProfile'} className="float-left" style={{color:'white'}}>UploadProfile</Link>
                        </li>
                    </ul>
                  </div>

            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={(e) => setVisibleLeft(true)}  style={{marginRight:'.25em'}} />
        </div>
    )
}

export default LeftNav