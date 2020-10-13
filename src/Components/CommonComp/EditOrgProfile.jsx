import React,{Component} from 'react'
import HeaderAll from './HeaderAll'
import Footer from './Footer'
import {Link} from 'react-router-dom'

class EditProfile extends Component{
    render(){
        return(
            <div className="content">
                {/*  Header */}
                <HeaderAll isProfile={true}></HeaderAll>
                {/* Main Content on the page */}
                <div className="content_section main">

                <div className="mt-3 mb-3 setting_text1"> 
                            <Link to="/providerDashboard">
                            <img className="setting_arrow marR5" src="images/EmailSettings/backward-link-arrow.svg" alt="arrow"/>
                            </Link>
                            Dashboard</div> 

                    <h4>Edit Profile</h4>
                    <div className="d-flex justify-content-between">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    <div> <button className="btn btn-blue">Change Password</button>
                    </div>
                    </div>
                    <section className="white-middle-section mt-4">
                        
                    <div className="profile text-center">
                            <div className="img-wrapper">
                            <label htmlFor='picture'>
                            <img src="images/Dashboard-assets/ar_camera.svg" className="rounded-circle" width="20px" height="20px"/>
                            </label>


                            <form style={{display: "none"}}>
                            <input type="file" name="pic" accept="image/*;capture=camera" accept=".gif,.jpg,.png,.tif|image/*" id='picture'/>
                            <input type="submit"/>
                            </form>
                            <img className="mr-3 rounded-circle" src="images/Dashboard-assets/user-f.jpg" alt="User profile"/>
                            </div>
                            <div className="pt-3">
                            <div>Rosa Dodson</div>
                            <p>Admin</p>
                            </div>
                            </div>
                        <h5 className="my-4 pt-3 border-top">Profile Details</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="orgName">Organisation Name</label>
                                    <input type="text" id="orgName" name="orgName" placeholder="ABC Agency" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userEmail">Official Email</label>
                                    <input type="email" id="userEmail" name="userEmail" placeholder="joedoe@example.com" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userMobile">Mobile/Landline</label>
                                    <input type="text" id="userMobile" name="userEmail" placeholder="98500 00000" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="userName">Contact Person Name</label>
                                    <input type="text" id="userName" name="userName" placeholder="joe doe" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gstin">GSTIN</label>
                                    <input type="text" id="gstin" name="gstin" placeholder="GSTIN (optional)" className="form-control" />
                                </div>
                                
                            </div>
                        </div>  
                        <div className="mt-3 text-right">      
                        <button className="btn btn-blue mt-2rem">Update</button>
                            </div>             
                    </section>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default EditProfile