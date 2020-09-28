import React, { Component, Fragment } from 'react'
import HeaderAll from '../../CommonComp/HeaderAll';
import Footer from '../../CommonComp/Footer';
import LeftNavCandidate from '../../CommonComp/LeftNavCandidate';

class AcceptedInterviews extends Component {
    render() {
        return (
            <Fragment>
                <LeftNavCandidate></LeftNavCandidate>
                <div class="maincontent toggled">
                <HeaderAll isCandidate={true}></HeaderAll>
                    <section class="content_section">
                        <div class="row">
                            <div class="col-md-12 pb-2 pt-2">
                                <h5 class="job-heading">Accepted Interviews</h5>
                                <p class="job-invite">You have 3 accepted interviews, View <span class="job-accepted"><a href="" class="job-accept">Interview Invites</a></span></p>
                            </div></div>

                        <section class="white-middle-section ml-0 mr-1">
                            <div class="row">
                                <div class="col-md-12 pb-5">
                                    <div class="form-group">
                                        <div class="input-group job-search float-left">
                                            <input class="form-control py-2 border-right-0 border" type="search" value="Search by job title, skills, location" id="example-search-input" />
                                            <span class="input-group-append">
                                                <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                                            </span>
                                        </div>
                                        <div class="dropdown float-right">
                                            <button class="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sort By
  </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div></div></div>
                            <section class="job-white-card pb-5">
                                <div class="row">
                                <div class="col-md-12 job-title">
                                                <a href=""> TCS - Sr. Software Engineer</a> <span class="job-posting"> Posted 1 day ago</span>

                                            </div>
                                    <div class="col-md-9">
                                        
                                        <ul class="job-skills">
                                            <li><img src="/images/Candidate/Path 479.svg" />Development</li>
                                            <li><img src="/images/Candidate/Group 631.svg" />5-6 years</li>
                                            <li><img src="/images/Candidate/Shape.svg" />Permanent</li>
                                            <li><img src="/images/Candidate/Group 632.svg" />Mumbai, India</li>
                                            <li><img src="/images/Candidate/Group 633.svg" /> Java, J2EE</li>
                                            <li><img src="/images/Candidate/Group 634.svg" />2</li>
                                        </ul>
                                        <h6 class="job-desc">Job Description</h6>
                                        <p>We are looking for a Senior Python Developer to build functional and efficient server-side applications.</p>
                                        <p>Senior Python Developer responsibilities include participating in all phases of the software development lifecycle and coaching junior developers. If you’re a seasoned developer...</p>
                                    </div>

                                    <div class="col-md-3 ">
                                    <div class="float-right">
                                            <div class="interview-status">
                                                <div class="float-left"><img src="/images/Candidate/teamwork.svg"/></div>
                                                <div class="float-left"> <span>Interview Status</span>
                                                <p>Shortlisted</p></div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow"/></a></div>
                            </section>

                            <section class="job-white-card pb-4">
                                <div class="row">
                                <div class="col-md-12 job-title">
                                                <a href=""> Wipro - Sr. Software Engineer</a> <span class="job-posting"> Posted 1 day ago</span>
                                            </div>
                                    <div class="col-md-9">
                                       
                                        <ul class="job-skills">
                                            <li><img src="/images/Candidate/Path 479.svg" />Development</li>
                                            <li><img src="/images/Candidate/Group 631.svg" />5-6 years</li>
                                            <li><img src="/images/Candidate/Shape.svg" />Permanent</li>
                                            <li><img src="/images/Candidate/Group 632.svg" />Mumbai, India</li>
                                            <li><img src="/images/Candidate/Group 633.svg" /> Java, J2EE</li>
                                            <li><img src="/images/Candidate/Group 634.svg" />2</li>
                                        </ul>
                                        <h6 class="job-desc">Job Description</h6>
                                        <p>We are looking for a Senior Python Developer to build functional and efficient server-side applications.</p>
                                        <p>Senior Python Developer responsibilities include participating in all phases of the software development lifecycle and coaching junior developers. If you’re a seasoned developer...</p>
                                    </div>
                                    <div class="col-md-3 ">
                                        <div class="float-right">
                                            <div class="interview-status">
                                                <div class="float-left"><img src="/images/Candidate/teamwork.svg"/></div>
                                                <div class="float-left"> <span>Interview Status</span>
                                                <p>Shortlisted</p></div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow"/></a></div></section>
                        </section>  </section>
                    <Footer></Footer>
                </div>
            </Fragment >
        );
    }
}
export default AcceptedInterviews