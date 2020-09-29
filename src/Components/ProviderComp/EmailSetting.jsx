import React, { Component, Fragment } from 'react'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import axios from 'axios'
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';

class EmailSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateId: localStorage.getItem('candidateId'),
            id: '',
            providerAllowNotification: false,
            candidateTermsAndCondition: false,
            offeresMadeToCandidate: false,
            recruiterAllowNotification: false,
            succesfulJobPost: false,
            newApplicationJobPosted: false,
            interviewAcceptedDeclined: false
        };
        this.onProviderTogggleChange = this.onProviderTogggleChange.bind(this)
        this.onRecruiterTogggleChange = this.onRecruiterTogggleChange.bind(this)
        this.onCandidateTermsChange = this.onCandidateTermsChange.bind(this)
        this.onOffersMadeToCandidateChange = this.onOffersMadeToCandidateChange.bind(this)
        this.onSuccessfulJobPostChange = this.onSuccessfulJobPostChange.bind(this)
        this.onNewAppJobPostChange = this.onNewAppJobPostChange.bind(this)
        this.onInterviewAcceptedDeclinedChange = this.onInterviewAcceptedDeclinedChange.bind(this)
    }

    /*To handle Provider Allow Notification Toggle */
    onProviderTogggleChange = (e) => {
        this.setState({
            providerAllowNotification: true,
            candidateTermsAndCondition: true,
            offeresMadeToCandidate: true
        })

        /*If Provider allow notifications toggler is disabled then all child togglers are disabled*/
        if (!this.state.providerAllowNotification === false) {
            this.setState({
                providerAllowNotification: false,
                candidateTermsAndCondition: false,
                offeresMadeToCandidate: false,
            })
        }
    }

    /* To handle Recruiter Allow Notification Toggle */
    onRecruiterTogggleChange = (e) => {
        this.setState({
            recruiterAllowNotification: true,
            succesfulJobPost: true,
            newApplicationJobPosted: true,
            interviewAcceptedDeclined: true
        })
        /*If Provider allow notifications toggler is disabled then all child togglers are disabled*/
        if (!this.state.recruiterAllowNotification === false) {
            this.setState({
                recruiterAllowNotification: false,
                succesfulJobPost: false,
                newApplicationJobPosted: false,
                interviewAcceptedDeclined: false,
            })
        }
    }


    /* To handle Candidate Terms and Conditions Change */
    onCandidateTermsChange = () => {
        this.setState(initialState => ({
            candidateTermsAndCondition: !initialState.candidateTermsAndCondition,
        })
        )
        /* If Candidate Terms and conditions checkbox is disabled then allow notification is also disabled */
        if (!this.state.candidateTermsAndCondition === false) {
            this.setState({
                providerAllowNotification: false
            })
        }
    }

    /* To handle Candidate Terms and Conditions */
    onOffersMadeToCandidateChange = () => {
        this.setState(initialState => ({
            offeresMadeToCandidate: !initialState.offeresMadeToCandidate,
        })
        )
        /* If Candidate Terms and conditions checkbox is disabled then provider allow notification is also disabled */
        if (!this.state.offeresMadeToCandidate === false) {
            this.setState({
                providerAllowNotification: false
            })
        }
    }

    /* To handle Successful Job Post Change */
    onSuccessfulJobPostChange = () => {
        this.setState(initialState => ({
            succesfulJobPost: !initialState.succesfulJobPost,
        })
        )
        /* If successful Job Post is disabled then recruiter allow notification is also disabled */
        if (!this.state.succesfulJobPost === false) {
            this.setState({
                recruiterAllowNotification: false
            })
        }
    }

    /* To handle new application Job Post */
    onNewAppJobPostChange = () => {
        this.setState(initialState => ({
            newApplicationJobPosted: !initialState.newApplicationJobPosted,
        })
        )
        /* If new Application Job Post is disabled then allow notification is also disabled */
        if (!this.state.newApplicationJobPosted === false) {
            this.setState({
                recruiterAllowNotification: false
            })
        }
    }

    /* To hadle interview accepted/Declined by a candidate */
    onInterviewAcceptedDeclinedChange = () => {
        this.setState(initialState => ({
            interviewAcceptedDeclined: !initialState.interviewAcceptedDeclined,
        })
        )
        /* If new interview accepted/declined is disabled then recruiter allow notification is also disabled */
        if (!this.state.interviewAcceptedDeclined === false) {
            this.setState({
                recruiterAllowNotification: false
            })
        }
    }

    /* To save Data */
    saveData = () => {
        console.log(" data saved Successfully")
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: 'Settings Updated Successfully' }, 50000);

    }

    render() {
        const status=localStorage.getItem('status')
        console.log(status)
        return (
                    <div className="content">
                    <Toast ref={(el) => this.toast = el} />
                        <HeaderAll isSetting={true}></HeaderAll>
                        <div className="content_section main">

                            {/* Content on the page */}
                            <div className="mt-3 setting setting_text1">
                            <div className=" mb-3">
                                {/**  
                                 * If recruiter toggle is active then from email settings component recruiter dashboard will open else provider dashboard will open
                                 **/}
                                {
                                  (status==="recruiter") ?
                                  <Link to="/recruiterDashboard">
                            <img className="setting_arrow marR5" src="/images/EmailSettings/backward-link-arrow.svg" alt="arrow"/>
                            </Link>  
                            :
                            <Link to="/providerDashboard">
                            <img className="setting_arrow marR5" src="images/EmailSettings/backward-link-arrow.svg" alt="arrow"/>
                            </Link>
                                }
                            Dashboard</div>
                                <div className="setting settingTitle_text mb-2">Email Notification Preferences</div>
                                <div className="setting setting_text">You can manage your preferences for email notifications from here</div>
                                <section className="white-middle-section mt-4">
                                    <div className="row">
                                        <div className="col-md-8 offset-md-2">

                                            {/* Allow Notication for Provider */}
                                            <div className="d-flex justify-content-between border-bottom-thick mb-4">
                                                <div className="settingSubtitle_text">Allow Notifications for Provider</div>
                                                <div>
                                                    <label className="switch " >
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.providerAllowNotification}
                                                            onChange={this.onProviderTogggleChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                {/* Candidate has accepted terms and Conitions */}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">Candidate has accepted terms &amp; conditions for their profile to be visible in the portal</div>
                                                    <div>
                                                        <label className="container">
                                                            <input
                                                                type="checkbox"
                                                                checked={this.state.candidateTermsAndCondition}
                                                                onChange={this.onCandidateTermsChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Offer made to their candidate*/}
                                                <div className="d-flex justify-content-between mb-4">
                                                    <div className="setting_text">Offer made to their candidate</div>
                                                    <div>
                                                        <label className="container">
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.offeresMadeToCandidate}
                                                                onChange={this.onOffersMadeToCandidateChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Allow Notifications for Recruiter*/}
                                                <div className="d-flex justify-content-between border-bottom-thick mb-4">
                                                    <div className="settingSubtitle_text">Allow Notifications for Recruiter</div>
                                                    <div>
                                                        <label className="switch " >
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.recruiterAllowNotification}
                                                                onChange={this.onRecruiterTogggleChange}
                                                            />
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* Successful job post */}
                                                <div>
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <div className="setting_text">Successful job post</div>
                                                        <div>
                                                            <label className="container">
                                                                <input type="checkbox" className="primary"
                                                                    checked={this.state.succesfulJobPost}
                                                                    onChange={this.onSuccessfulJobPostChange}

                                                                />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* New Application on posted job */}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text"> New application on posted job</div>
                                                    <div>
                                                        <label className="container">
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.newApplicationJobPosted}
                                                                onChange={this.onNewAppJobPostChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Interview invite accepted/declined */}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">Interview invite accepted/declined by a candidate</div>
                                                    <div>
                                                        <label className="container">
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.interviewAcceptedDeclined}
                                                                onChange={this.onInterviewAcceptedDeclinedChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Save button */}
                                            <div className="text-right pt-3">
                                                <button className="btn btn-blue" onClick={this.saveData}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
        )
    }
}
export default EmailSetting





