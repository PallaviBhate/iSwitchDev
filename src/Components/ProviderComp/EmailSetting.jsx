import React, { Component, Fragment } from 'react'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import axios from 'axios'

class EmailSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateId: localStorage.getItem('candidateId'),
            id: '',
            allowNotification: false,
            successfulJobPost: false,
            newApplicationOnPostedJobs: false,
            interviewAcceptedDeclined: false,
            offerAcceptedDeclined: false,
            newMatchesAlert: false,
        };

        this.onToggle = this.onToggle.bind(this);
        this.handleJobPost = this.handleJobPost.bind(this)
        this.handleNewAppPostedJob = this.handleNewAppPostedJob.bind(this)
        this.handleInterviewAccepted = this.handleInterviewAccepted.bind(this)
        this.handleOffersAccepted = this.handleOffersAccepted.bind(this)
        this.handleNewMatchesAlert = this.handleNewMatchesAlert.bind(this)
    }

    //To handle child notifications enabled or disabled
    onToggle = (e) => {
        this.setState({
            allowNotification: true,
            successfulJobPost: true,
            newApplicationOnPostedJobs: true,
            interviewAcceptedDeclined: true,
            offerAcceptedDeclined: true,
            newMatchesAlert: true,
        })
        //If allow notifications toggler is disabled then all child togglers are disabled

        if (!this.state.allowNotification === false) {
          this.setState({
            allowNotification:false,
            successfulJobPost: false,
            newApplicationOnPostedJobs: false,
            interviewAcceptedDeclined: false,
            offerAcceptedDeclined: false,
            newMatchesAlert: false,
          })
        }
    }
    // To Post data to api
    componentDidUpdate() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios
            .put("https://techm-jobzilla.herokuapp.com/jobs/user/notificationSetting", this.state, options)
            .then(Response => {
                console.log("Success..", Response)
            })
            .catch(error => {
                console.log("Error Occured..", error)
            })
    }

    //To handle Successful Job Post
    handleJobPost = () => {
        this.setState(initialState => ({
            successfulJobPost: !initialState.successfulJobPost,
        }));
    }

    //To handle New App Posted Job
    handleNewAppPostedJob = () => {
        this.setState(initialState => ({
            newApplicationOnPostedJobs: !initialState.newApplicationOnPostedJobs
        }));
    }

    //To handle interview accepted or declined
    handleInterviewAccepted = () => {
        this.setState(initialState => ({
            interviewAcceptedDeclined: !initialState.interviewAcceptedDeclined,
        }));
    }

    //To handle offers Accepted or Declined
    handleOffersAccepted = () => {
        this.setState(initialState => ({
            offerAcceptedDeclined: !initialState.offerAcceptedDeclined,
        }));
    }

    //To handle New Match alert
    handleNewMatchesAlert = () => {
        this.setState(initialState => ({
            newMatchesAlert: !initialState.newMatchesAlert,
        }));
    }

    render() {
        return (
            <Fragment>
                <div className="content">
                    <HeaderAll></HeaderAll>
                    <div className="content_section main">

                        {/* Content on the page */}
                        <div className="mt-3">
                            <p className="mb-0">Email Notification Preferences</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                            <section className="white-middle-section mt-4">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">

                                        {/* Allow Notication */}
                                        <div className="d-flex justify-content-between border-bottom-thick mb-4">
                                            <h5>Allow Notification</h5>
                                            <div>
                                                <label className="switch " >
                                                    <input type="checkbox" className="primary"
                                                        defaultChecked={this.state.allowNotification}
                                                        onClick={this.onToggle} />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Successful job post */}

                                        <div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>Successful job post</div>
                                                <div>
                                                    <label className="switch ">
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.successfulJobPost}
                                                            onChange={this.handleJobPost}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* New Application */}

                                            <div className="d-flex justify-content-between mb-3">
                                                <div> New application posted job</div>
                                                <div>
                                                    <label className="switch ">
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.newApplicationOnPostedJobs}
                                                            onChange={this.handleNewAppPostedJob}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* Interview accepted/declined */}

                                            <div className="d-flex justify-content-between mb-3">
                                                <div>Interview accepted/declined</div>
                                                <div>
                                                    <label className="switch ">
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.interviewAcceptedDeclined}
                                                            onChange={this.handleInterviewAccepted}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* Offers accepted/declined */}

                                            <div className="d-flex justify-content-between mb-3">
                                                <div>Offers accepted/declined</div>
                                                <div>
                                                    <label className="switch ">
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.offerAcceptedDeclined}
                                                            onChange={this.handleOffersAccepted}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* New matches alert */}

                                            <div className="d-flex justify-content-between mb-3">
                                                <div>New matches alert</div>
                                                <div>
                                                    <label className="switch ">
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.newMatchesAlert}
                                                            onChange={this.handleNewMatchesAlert}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </Fragment>
        )
    }
}
export default EmailSetting