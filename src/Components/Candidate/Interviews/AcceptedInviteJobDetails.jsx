import React, { Component, Fragment } from 'react'
import HeaderAll from '../../CommonComp/HeaderAll';
import LeftNavCandidate from '../../CommonComp/LeftNavCandidate'
import Footer from '../../CommonComp/Footer'
import {Link} from 'react-router-dom'

class AcceptedInviteJobDetails extends Component {    
    render(){
        return(
            <Fragment>
            <LeftNavCandidate></LeftNavCandidate>
            <div className="maincontent">            
                <HeaderAll isCandidate={true}></HeaderAll>
                <div className="container-fluid">            
                    <div aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to = "/candidate/interviews/acceptedInterviews">Accepted  Invites</Link>
                                </li>
                            <li class="breadcrumb-item active" aria-current="page">Job Details</li>
                        </ol>
                    </div>               
                           
                    <div className="card job_details">
                        <div className="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12 job-title-link">
                                            <a href=""> TCS - Sr. Software Engineer</a> 
                                            <span class="job-posting"> Posted 1 day ago</span>
                                        </div>
                                    </div>
                                    <ul class="job-skills">
                                        <li><img src="/images/icons/category.svg" />Development</li>
                                        <li><img src="/images/icons/experience.svg" />5-6 years</li>
                                        <li><img src="/images/icons/job_role.svg" />Permanent</li>
                                        <li><img src="/images/icons/location.svg" />Mumbai, India</li>
                                        <li><img src="/images/icons/technology.svg" /> Java, J2EE</li>
                                        <li><img src="/images/icons/vaccency.svg" />2</li>
                                    </ul>
                                </div>                               
                            </div>
                        </div>
                    </div>                                
                
                    <div className="card content_card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="content_headings">  
                                        <span><img src="/images/icons/skills.svg"/></span>                              
                                        <h6 >Nice to have</h6>
                                        <span>Skill 1, Skill 2, Skill 3</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content_headings">
                                       <span><img src="/images/icons/salary.svg"/></span>
                                        <h6 >Annual Salary</h6>
                                        <span>8.00 - 10.00 Lakhs</span>
                                    </div>
                                </div>                    
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="content_headings">
                                        <span><img src="/images/icons/job_desc.svg"/></span>
                                        <h6 >Job Description</h6>
                                        <p>We are looking for a Senior Python Developer to build functional and efficient server-side applications.</p>
                                        <p>Senior Python Developer responsibilities include participating in all phases of the software development lifecycle and coaching junior developers. If you’re a seasoned developer with a love for back-end technologies, we’d like to meet you.</p>
                                        <p>Your ultimate goal is to create high-quality products that meet customer needs.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content_headings">
                                        <span><img src="/images/icons/responsibilities.svg"/></span>
                                        <h6>Responsibilities</h6>
                                        <ol>
                                            <li>Help design and implement functional requirements.</li>
                                            <li>Build efficient back-end features in Python.</li>
                                            <li>Integrate front-end components into applications.</li>
                                            <li>Manage testing and bug fixes Prepare technical documentation.</li>
                                            <li>Collaborate with UX/UI designers to implement design into the code.</li>
                                            <li>Coach junior team members.</li>
                                            <li>Implement software enhancements and suggest improvements.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div  className="content_headings">
                                        <span><img src="/images/icons/others.svg"/></span>
                                        <h6>Others</h6>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-5 others_section_firstcol">
                                                <div>Working Hours</div>
                                            </div>
                                            <div className="col-xs-12 col-md-6 others_section_secondcol">
                                                <div>10:00 AM-7:00 PM</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-5 others_section_firstcol">
                                                <div>Visa</div>
                                            </div>
                                            <div className="col-xs-12 col-md-6 others_section_secondcol">
                                                <div>Nice to have H1B</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-5 others_section_firstcol">
                                                <div>Passport</div>
                                            </div>
                                            <div className="col-xs-12 col-md-6 others_section_secondcol">
                                                <div>Must have Passport</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                            {/* <div className="action_buttons">
                                <button type="button" className="btn btn-primary">Accept</button>
                                <button type="button" className="btn btn-outline-primary ml-4">Decline</button>
                            </div> */}
                        </div>
                    </div>
                </div>            
                <Footer></Footer>
            </div>
        </Fragment>

        )
    }
}
export default AcceptedInviteJobDetails

