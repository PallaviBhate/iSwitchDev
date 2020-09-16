import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Assets/css/Style.css'
import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class RecentMatches extends Component {
  render() {
    const percentage = 78;
    return (
      <div>
        {/* Monthly Reports percentage section */}
        <div className="row ml-0 mr-1">
          <div className="col col-sm-12 col-md-12 col-lg-12">
            <h4 className="wid100 ml-3 marT30">Recent Matches</h4>
            <section className="recent_matches_section">
              {[1, 2, 3].map((i) => {
                return (
                  <div key={i} class="row ml-0 mr-1 align-items-center">
                    <div class={"col-12 col-sm-12 col-md-8 col-lg-8 pl-0 align-items-center"}>
                      <div class="job-title-header">
                        <span class="mr-3 job-title-text">TCS-Sr. Software Engineer</span>
                        <span class="job-posted-time-text">Posted 1 day ago</span>
                      </div>
                      <div class="job-content">
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Category</span>
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>5-6 years</span>
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Full Time</span>
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Mumbai, India</span>
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>Infra Operation</span>
                        <span class="mr-4 job-content-attributes"><i className="fa fa-bars mr-2" aria-hidden="true"></i>2</span>
                      </div>
                    </div>
                    <div class={"col-12 col-sm-12 col-md-4 col-lg-4 d-flex flex-row-reverse align-items-center"}>
                      <div class="p-2 ml-3"><Link to="#"><span class="mr-2">View Details</span><i className="fa fa-angle-right mr-2" aria-hidden="true"></i></Link></div>
                      <div class="p-2">
                        <div style={{ width: 65, height: 65 }}>
                          <CircularProgressbarWithChildren styles={{
                            path: {
                              stroke: '#147AD6',
                            }
                          }} strokeWidth={4} value={percentage} >
                            <strong><span style={{ fontSize: 12 }}>
                              {percentage}%
                            </span></strong>
                            <span style={{ fontSize: 10, marginTop: -5 }}>
                              Match
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    )
  }
}
