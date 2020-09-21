import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/css/Style.css'
import Footer from './Footer';
import LeftNavCandidate from './LeftNavCandidate';
import HeaderAll from './HeaderAll';

class Interviews extends Component {
  render() {
    const details = localStorage.getItem('emaildetails')
    return (
      <div>
        <LeftNavCandidate></LeftNavCandidate>
        <div className="maincontent toggled">
          <HeaderAll></HeaderAll>
          {/* <UploadProfile/> */}
          <div className="container-fluid">
            <div className="row flex-xl-nowrap">
              <section className="content_section col py-md-3 pl-md-4 bd-content">
                {/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}
                {/* To display login User Details */}
                <h6>Welcome {details}</h6>
                <div>
                  <div>
                    {/* Monthly Reports percentage section */}
                    <div className="row ml-0 mr-1 interviews-section">
                      <div className="col col-sm-12 col-md-12 col-lg-12 row-sec align-items-center">
                        <div class="job-title-header">
                          <span class="mr-3 job-title-text">Sr. Software Engineer</span>
                          <span class="job-posted-time-text">Posted 1 day ago</span>
                        </div>
                        <div class="job-content d-flex justify-content-between">
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Category</span>
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>5-6 years</span>
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Full Time</span>
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Mumbai, India</span>
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Infra Operation</span>
                          <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>2</span>
                        </div>
                      </div>
                      <div class="card-columns">
                        <div class="card">
                          <div class="card-body">
                            <div className="row ml-0 mr-0 interviews-section align-items-center">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Nice to have</span>
                                <span style={{ float: 'right' }}>:</span>
                              </div>
                              <div className="col col-sm-12 col-md-8 col-lg-8 align-items-center">
                                <div class="row ml-0 mr-0 align-items-center">
                                  {[1, 2, 3].map((i) => {
                                    return (
                                      <div class="skill-set"><span class="skill-set-text">Skill 1</span></div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-body">
                            <div className="row ml-0 mr-0 interviews-section align-items-center">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Annual Salary</span>
                                <span style={{ float: 'right' }}>:</span>
                              </div>
                              <div className="col col-sm-12 col-md-8 col-lg-8 align-items-center">
                                <div class="row ml-0 mr-0 align-items-center">
                                  <span class="skill-set-text">8.00 - 10.00 Lacs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-columns">
                        <div class="card">
                          <div class="pt-3 card-body">
                            <div className="row ml-0 mr-0 interviews-section align-items-center mb-4">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Job Description</span>
                                <span style={{ float: 'right' }}>:</span>
                              </div>
                              <div className="col col-sm-12 col-md-8 col-lg-8 align-items-center">
                              </div>
                            </div>
                            <div className="pl-1 col col-sm-12 col-md-12 col-lg-12 align-items-center">
                              <ul style={{ paddingLeft: 20 }}>
                                <li><p class="skill-set-text">We are looking for a Senior Python Developer to build functional and efficient server-side applications.</p></li>
                                <li><p class="skill-set-text">Senior Python Developer responsibilities include participating in all phases of the software development lifecycle and coaching juniordevelopers. If you’re a seasoned developer with a love for back-end technologies, we’d like to meet you.</p></li>
                                <li><p class="skill-set-text">Your ultimate goal is to create high-quality products that meet customer needs.</p></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-body">
                            <div className="row ml-0 mr-0 interviews-section align-items-center">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Others</span>
                                <span style={{ float: 'right' }}>:</span>
                              </div>
                              <div className="col col-sm-12 col-md-8 col-lg-8 align-items-center">
                                <div class="row ml-0 mr-0 align-items-center">
                                  <span class="skill-set-text">Must have passport</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-body pt-3">
                            <div className="row ml-0 mr-0 interviews-section align-items-center mb-4">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Responsibilities</span>
                                <span style={{ float: 'right' }}>:</span>
                              </div>
                              <div className="col col-sm-12 col-md-8 col-lg-8 align-items-center">
                              </div>
                            </div>
                            <div className="pl-1 col col-sm-12 col-md-12 col-lg-12 align-items-center">
                              <ul style={{ paddingLeft: 20 }}>
                                <li><p class="skill-set-text">Help design and implement functional requirements</p></li>
                                <li><p class="skill-set-text">Build efficient back-end features in Python</p></li>
                                <li><p class="skill-set-text">Manage testing and bug fixes</p></li>
                                <li><p class="skill-set-text">Prepare technical documentation</p></li>
                                <li><p class="skill-set-text">Collaborate with UX/UI designers to implement design into the code</p></li>
                                <li><p class="skill-set-text">Coach junior team members</p></li>
                                <li><p class="skill-set-text">Implement software enhancements and suggest improvements</p></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.props.isInvites ? <div className="col col-sm-12 col-md-12 col-lg-12 align-items-center justify-content-center text-center mt-5 mb-5">
                        <button class="btn btn-primary mr-4">Accept</button>
                        <button class="btn btn-outline-primary">Decline</button>
                      </div> : null}
                    </div>
                  </div>
                </div>
                {/* Importing Overview Cards, Top skills card and monthly Report Bar Graph */}

              </section>
            </div>
          </div>

          <Footer></Footer>
        </div>
      </div>

    );
  }
}

export default Interviews