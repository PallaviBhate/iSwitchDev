import React,{Component} from 'react'
import HeaderAll from './HeaderAll'
import Footer from './Footer'

class EditProfile extends Component{
    render(){
        return(
            <div className="content">
                {/*  Header */}
                <HeaderAll></HeaderAll>
                {/* Main Content on the page */}
                <div className="content_section main">
                    <h4>Edit Profile</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    <section className="white-middle-section mt-4">
                        <div className="row profile">
                            <div className="media">
                            <div className="img-wrapper">
                                        <label htmlFor='picture'>
                                        <img src="images/ar-camera.png" className="rounded-circle" width="20px" height="20px"/>
                                        </label>

                                        <form style={{display: "none"}}>
                                            <input type="file" name="pic" accept="image/*;capture=camera" accept=".gif,.jpg,.png,.tif|image/*" id='picture'/>
                                            <input type="submit"/>
                                        </form>
                                    
                                <img className="mr-3 rounded-circle" src="images/Dashboard-assets/user-f.jpg" alt="User profile"/>
                                </div>
                                <div className="media-body mt-4">
                                    <div>Rosa Dodson</div>
                                    <p>Admin</p>
                                    <div>rosadodson@techmahindra.com</div>
                                    
                                </div>
                               
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
                                <button className="btn btn-blue mt-2rem">Update</button>
                            </div>
                        </div>  
                        <div className="row mt-5">
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <input type="password" class="form-control" placeholder="password" aria-describedby="basic-addon2"/>
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-eye" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-blue">Change Password</button>
                                </div>
                            </div>             
                    </section>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default EditProfile