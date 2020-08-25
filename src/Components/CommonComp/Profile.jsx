import React,{Component} from 'react'
import HeaderAll from './HeaderAll'
import Footer from './Footer'

class Profile extends Component{

    render(){
        return(
            <div className="content">
                {/*  Header */}
                <HeaderAll></HeaderAll>
                {/* Main Content on the page */}
                <div className="content_section main">
                    <h5>My Profile</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    <section className="white-middle-section mt-4">
                        <div className="row profile">
                            <div className="col-md-8">
                                <div className="media">
                                    <img className="mr-3 rounded-circle" src="images/Dashboard-assets/user-f.jpg" alt="User profile"/>
                                    <div className="media-body mt-4">
                                        <div>Rosa Dodson</div>
                                        <p>Admin</p>
                                        <div>rosadodson@techmahindra.com</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 align-self-end mb-3 text-center text-sm-right">
                            <button className="btn darkBlue float-sm-right float-none mt-3 mt-sm-0">Edit Profile</button>
                            </div>
                        </div>
                        <h6 className="mt-4 pt-3 border-top">Profile Details</h6>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <div className="col-sm-4">Organisation Name : </div>
                                    <div className="col-sm-8">Tech Mahindra</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-4">Official Email : </div>
                                    <div className="col-sm-8">rosadodson@techmahindra.com</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-4">Mobile/Landline : </div>
                                    <div className="col-sm-8">9854450000</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <div className="col-sm-4">Contact Person Name : </div>
                                    <div className="col-sm-8">John Doe</div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-sm-4">GSTIN : </div>
                                    <div className="col-sm-8">22 AAAA07564 1Z5</div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>
        )
    }

}

export default Profile