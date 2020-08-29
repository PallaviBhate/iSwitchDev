import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class HeaderAll extends Component{
  render(){
    return(
      <header className="Header">
            <div className="float-left logo_container col-xl-2">
                <img src="images/Dashboard-assets/logo-white.png" className="logo"/>
            </div>
            <div className="float-left mt-2 d-inline-flex">
          <div className="mx-3 sub-title1 d-flex align-items-center">JOB : </div>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-toggler active">
              <input type="radio" name="options" id="option1" autoComplete="off" checked /> Provider
            </label>
            <label className="btn btn-toggler">
              <input type="radio" name="options" id="option2" autoComplete="off" /> Recruiter
            </label>
          </div>
        </div>
                    <ul className="nav mt-2">
                      <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="dropdown">
                          <span className="font-blue text-small">Rosa Dodson <i className="fa fa-angle-down" aria-hidden="true"></i></span>   
                        </a>
                        <ul className="dropdown-menu mt-2">
                          
                          <li>
                            <Link className="dropdown-item" to="/profile" >
                              <i className="fa fa-user pr-2" aria-hidden="true"></i> My Profile
                              </Link>
                          </li>
                          
                          <li>
                            <Link className="dropdown-item" to="/emailsetting">
                              <i className="fa fa-cog pr-2" aria-hidden="true"></i> My Email Settings
                              </Link>
                          </li>
                          
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-sign-out pr-2" aria-hidden="true"></i> Logout</a>
                          </li>
                        </ul>
                      </li>
                      <li>          
                        <img className="rounded-circle profile-icon mr-3" src="images/Dashboard-assets/user-f.jpg" width="35" height="35"/>
                      </li>
                    </ul>
                   </header>
    )
  }

}

export default HeaderAll
