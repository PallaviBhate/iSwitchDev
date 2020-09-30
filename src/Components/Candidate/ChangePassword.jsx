import React, { Component, Fragment } from 'react'
import HeaderAll from '../CommonComp/HeaderAll';
//import LeftNavCandidate from '../CommonComp/LeftNavCandidate'
import Footer from '../CommonComp/Footer'
import {Link} from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
import { event } from 'jquery';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.oldPasswordRef = React.createRef();
        this.newPasswordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();

        this.state = {
            revealOldPassword: false,
            revealNewPassword: false
           
        };
    }

    toggleOldPassword = event => {
        this.setState({revealOldPassword: !this.state.revealOldPassword});
    }

    toggleNewPassword = event => {
        this.setState({revealNewPassword: !this.state.revealNewPassword});
    }
    
    render() {
         const {oldPasswordValue, newPasswordValue,  confirmPasswordValue, revealOldPassword, revealNewPassword  } = this.state;
        return (
            <Fragment>
                {/* <LeftNavCandidate></LeftNavCandidate> */}
                <div className="content">
                {/* <div className="maincontent toggled"> */}
                <HeaderAll isCandidate={true}></HeaderAll>
                <section class="content_section main">
                        <div class="row">
                        <div class="col-md-12 pb-2 pt-2">
                                {/*<p className="backtodashboard">
                                     <a href="#"> </a> </p>*/}
                                    <Link className="backtodashboard" to="/candidate/dashboard">
                                    <i className="pi pi-angle-left" />Dashboard
                                    </Link>
                            </div>
                            <div class="col-md-12 pb-2 pt-2">
                                <p class="pass-header">Change Password</p>
                                <p class="pass-headerhelptext">You can change password from here</p>
                            </div></div>

                        <section class="white-middle-section ml-0 mr-1"> 
                            <section class="password-card">   
                            <div className="form-group old-password">
                                    <label htmlFor="old_password">Old Password</label>
                                    <input id="old_password" className="form-control" name="oldPassword" value={oldPasswordValue} onChange={this.onChange} type={revealOldPassword ? "text":"password"} placeholder="Enter Old Password" ref={this.oldPasswordRef} />
                                    <span onClick={this.toggleOldPassword}>
                                        <span>
                                            {revealOldPassword ? 
                                            <i className="pi pi-eye showOldPasswordIcon"/>:
                                            <i className="pi pi-eye-slash showOldPasswordIcon"/>
                                            }
                                        </span>
                                    </span>
                                </div>
                                <div className="form-group new-password">
                                    <label htmlFor="new_password">New Password</label>
                                    <input id="new_password" className="form-control" name="newPassword" value={newPasswordValue} onChange={this.onChange} type={revealNewPassword ? "text":"password"} placeholder="Enter New Password" ref={this.newPasswordRef} />
                                    <span onClick={this.toggleNewPassword}>
                                        <span>
                                            {revealNewPassword ? 
                                            <i className="pi pi-eye showNewPasswordIcon"/>:
                                            <i className="pi pi-eye-slash showNewPasswordIcon"/>
                                            }
                                        </span>
                                    </span>
                                </div>    
                                <div className="form-group confirm-password">
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                    <input id="confirm_password" className="form-control" name="confirmPassword" value={confirmPasswordValue} onChange={this.onChange} type="password" placeholder="Confirm New Password" ref={this.confirmPasswordRef} />
                                    
                                </div> 
                                <div className="update_button">
                                    <button type="button" className="btn btn-primary">Update Password</button>   
                                </div>                      
                                </section>
                        </section>
                    </section>
                    <Footer></Footer>
                </div>
            </Fragment >
        );
    }
}
export default ChangePassword
