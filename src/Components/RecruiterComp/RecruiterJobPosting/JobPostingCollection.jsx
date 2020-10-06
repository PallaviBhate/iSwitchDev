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
        
        this.items =  [
            {label: 'Category', icon: 'pi pi-list'},
            {label: '5-6 years', icon: 'pi pi-fw pi-calendar'},
            {label: 'FullTime', icon: 'pi pi-fw pi-clock'},
            {label: 'Mumbai', icon: 'pi pi-fw pi-map-marker'},
            {label: 'Java', icon: 'pi pi-fw pi-cog'},
            {label: '2', icon: 'pi pi-fw pi-users'}
        ];
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
                               </div>                  <div className="job-content d-flex-left justify-content">                         
                                <span className="mr-4 job-content-attributes"><i className="pi pi-list mr-2" aria-hidden="true"></i>Development</span>                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-calendar mr-2" aria-hidden="true"></i>5-6 years</span>                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-clock mr-2" aria-hidden="true"></i>Full Time</span>                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-map-marker mr-2" aria-hidden="true"></i>Mumbai, India</span>                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-cog mr-2" aria-hidden="true"></i>React js</span>                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-users mr-2" aria-hidden="true"></i>2</span>                        </div>
                        {/* <TabMenu className="ml-0 marB5" model={this.items} />  */}

                </div>
                </section>
                </div>

                <div className="content_section main">
                <section className="white-middle-section1 mt-4 "> 
                
                 <div className="viewdetails"><p>View More Details</p></div>  
                    <Accordion activeIndex1={0}  >
                        <AccordionTab >
                          
                        
                          {/* <div class="card-body"> */}
                            <div className="row ml-0 mr-0 interviews-section align-items-center">
                              <div className="pl-1 col col-sm-12 col-md-4 col-lg-4 align-items-center">
                                <span class="mr-4 heading-text"><i  aria-hidden="true"></i>Nice to have</span>
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
                          {/* </div> */}
                      
                      
                     
                        </AccordionTab>
                        
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
