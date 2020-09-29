import React, { Component, Fragment } from 'react'
import Footer from '../CommonComp/Footer';
import LeftNavCandidate from '../CommonComp/LeftNavCandidate';
import HeaderAll from '../CommonComp/HeaderAll';

class JobOffers extends Component {
    render() {
        return (
            <Fragment>
                <LeftNavCandidate></LeftNavCandidate>
                <div className="maincontent toggled">
                <HeaderAll isCandidate={true}></HeaderAll>
                    <section class="content_section">
                        <div class="row">
                            <div class="col-md-12 pb-2 pt-2">
                                <h5 class="job-heading">Job Offers In Pipeline</h5>
                                <p class="job-invite">You have <span>3</span> job offers</p>
                            </div></div>

                        <section class="white-middle-section ml-0 mr-1">
                            <div class="row">
                                <div class="col-md-12 pb-5">
                                    <div className="form-group">
                                        <div className=" job-search float-left">                                   
                                            <input className="form-control py-2 border" type="text" placeholder="Search by job title, skills, location"/> 
                                            <i className="pi pi-search search_icon"></i>
                                            </div>
                                        <div class="dropdown float-right">
                                            <button class="btn btn-secondary dropdown-toggle border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sort by
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
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-12 job-title">
                                                <a href=""> TCS - Sr. Software Engineer</a> <span class="job-posting"> Posted 1 day ago</span>

                                            </div>
                                        </div>
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

                                    
                                </div>

                                <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow"/></a></div>
                            </section>

                            <section class="job-white-card pb-4">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-12 job-title">
                                                <a href=""> Wipro - Sr. Software Engineer</a> <span class="job-posting"> Posted 1 day ago</span>
                                            </div>
                                        </div>
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
                                    
                                </div>
                                <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow"/></a></div></section>
                                <section class="job-white-card pb-5">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-12 job-title">
                                                <a href=""> Infosys - Sr. Software Engineer</a> <span class="job-posting"> Posted 1 day ago</span>

                                            </div>
                                        </div>
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

                                    
                                </div>

                                <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow"/></a></div>
                            </section>
                        </section>  </section>
                    <Footer></Footer>
                </div>
            </Fragment >
        );
    }
}
export default JobOffers