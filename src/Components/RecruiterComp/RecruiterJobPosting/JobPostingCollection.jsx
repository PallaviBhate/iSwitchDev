import React, { Component } from 'react'
import HeaderAll from '../../CommonComp/HeaderAll'
import Footer from '../../CommonComp/Footer'
import LeftNavProvider from '../../CommonComp/LeftNavProvider'
import CandidateApplication from './CandidateApplication'
import MatchingCandidate from './MatchingCandidate';
import ShortlistedCandidate from './ShortlistedCandidate'
import { TabMenu } from 'primereact/tabmenu';
import { TabView, TabPanel } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import {Link} from 'react-router-dom'


export default class JobPostingCollection extends Component {
	constructor(props){
        super(props)
        this.state = {
			      activeIndex: 1,
            activeIndex1: null,
        }
  }
	onClick(itemIndex) {
        let activeIndex1 = this.state.activeIndex1 ? [...this.state.activeIndex1] : [];
        if (activeIndex1.length === 0) {
            activeIndex1.push(itemIndex);
        }
        else {
            const index = activeIndex1.indexOf(itemIndex);
            if (index === -1) {
                activeIndex1.push(itemIndex);
            }
            else {
                activeIndex1.splice(index, 1);
            }
        }

        this.setState({ activeIndex1 });
    }

  open(){
        alert(`hii`)
  }

 
	render() {
		const details= localStorage.getItem('emaildetails')
		return (
			<div>
				<LeftNavProvider></LeftNavProvider>
				<div className="maincontent">
        <HeaderAll></HeaderAll>
        <div className="content_section main">
            <div className="container-fluid">          
                <div aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to ="/activeJob">Active Jobs</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Job Details</li>
                    </ol>
                </div>
            </div>

            <section className="white-middle-section1 mt-4">                               
                  <div>  
                    <img src= "../images/ActiveJob-JobDetails/Group 594.svg" onClick={this.open} style={{float : 'right'}}/>
                        <div className="job-title-header">                         
                            <span className="mr-3 job-title-text" id="designation1">Sr. Software Engineer</span>                         
                            <span className="job-posted-time-text">Posted 1 day ago</span>                       
                        </div>                  
                    
                        <div className="job-content d-flex-left justify-content">                         
                            <span className="mr-4 job-content-attributes"><i className="pi pi-list mr-2" aria-hidden="true"></i>Development</span>                         
                            <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-calendar mr-2" aria-hidden="true"></i>5-6 years</span>                         
                            <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-clock mr-2" aria-hidden="true"></i>Full Time</span>                         
                            <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-map-marker mr-2" aria-hidden="true"></i>Mumbai, India</span>                          
                            <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-cog mr-2" aria-hidden="true"></i>React js</span>                          
                            <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-users mr-2" aria-hidden="true"></i>2</span>                        </div>
                        </div>
            </section>
        </div>

        <div className="content_section main">
            <section className="white-middle-section1 mt-4 "> 
                <div className="viewdetails"><p>View More Details</p></div>  
                    <Accordion activeIndex1={0}  >
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
                          </div>
                    </div>
                </Accordion>
			      </section>
        </div>

			  <div className="content_section main">
            <section className="white-middle-section2  mt-4">
                <TabView  className="marB60">
                    <TabPanel header="Shortlisted Candidate">
						            <ShortlistedCandidate></ShortlistedCandidate>
                    </TabPanel>
					          <TabPanel header="Matching Candidate">
						            <MatchingCandidate></MatchingCandidate>
                    </TabPanel>
                    <TabPanel header="CandidateApplication">
						            <CandidateApplication></CandidateApplication>
                    </TabPanel>
                </TabView>
                   
            </section>
				</div>
        <Footer></Footer>
        </div>
      </div>
    )
  }
}
