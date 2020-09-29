import React, { Component, Fragment } from 'react'
import HeaderAll from '../CommonComp/HeaderAll';
import Footer from '../CommonComp/Footer';
import LeftNavCandidate from '../CommonComp/LeftNavCandidate';

class JobListing extends Component {
    render() {
        return (
            <Fragment>
            <LeftNavCandidate></LeftNavCandidate>
            <div className="maincontent toggled">
            <HeaderAll isCandidate={true}></HeaderAll>
                <section class="content_section">
                    <div class="row">
                        <div class="col-md-12 pb-2 pt-2">
                            <h5 class="job-heading">Job Listings</h5>
                        </div></div>
                    <section class="white-middle-section ml-0 mr-1">
                        <div class="row">
                            <div class="col-md-12 pb-5">
                                <div className="form-group">
                                    <div class="input-group job-search float-left">
                                        <input class="form-control py-2 border-right-0 border" type="search" value="Search by job title, skills, location" id="example-search-input" />
                                        <span class="input-group-append">
                                            <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                                        </span>
                                    </div>
                                    <span><a href="" class="advanced-search" data-toggle="modal" data-target="#searchModal">Advanced Search</a></span>
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
                                </div></div>
                        </div>
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

                                <div class="col-md-3 ">
                                    <div class="job-circle float-right">
                                        <div class="job-text-wrap">
                                            <span>76%</span>
                                            <span>Match</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow" /></a></div>
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
                                <div class="col-md-3 ">
                                    <div class="job-circle float-right">
                                        <div class="job-text-wrap">
                                            <span>56%</span>
                                            <span>Match</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row float-right job-full-detail"><a href="">view details <img src="/images/Candidate/Fill-35.svg" class="detail-arrow" /></a></div></section>
                    </section>  </section>

                {/* Modal Pop up */}
                <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title advSearch-modal" id="searchModalLabel">Advanced Search</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body advSearch-body">
                                <form>
                                    <div class="form-group">
                                        <label for="jobTitle">Search by Organization and Job Title</label>
                                        <input type="text" class="form-control" id="jobTitle" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="skills">Search by Skills</label>
                                        <input type="text" class="form-control" id="skills" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="location">Search by Location</label>
                                        <input type="text" class="form-control" id="location" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="employmentType">Employment Type</label>
                                        <select class="form-control" id="employmentType">
                                            <option>Permanent</option>
                                            <option>Part Time</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="experience"> Number of Years of Experience</label>
                                        <select class="form-control" id="experience">
                                            <option value="" disabled selected>Select Years of Experience</option>
                                            <option>3</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="category"> Category</label>
                                        <select class="form-control" id="category">
                                            <option value="" disabled selected>Select Category</option>
                                            <option>category1</option>
                                            <option>category2</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Fragment >
        );
    }
}
export default JobListing