
import React, { Component, Fragment } from 'react'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import axios from 'axios'
import { Toast } from 'primereact/toast';
import LeftNav from '../CommonComp/LeftNav'

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

    /* To handle child notifications enabled or disabled */
    onToggle = (e) => {
        this.setState({
            allowNotification: true,
            successfulJobPost: true,
            newApplicationOnPostedJobs: true,
            interviewAcceptedDeclined: true,
            offerAcceptedDeclined: true,
            newMatchesAlert: true,
        })

        /*If allow notifications toggler is disabled then all child togglers are disabled*/
        if (!this.state.allowNotification === false) {
            this.setState({
                allowNotification: false,
                successfulJobPost: false,
                newApplicationOnPostedJobs: false,
                interviewAcceptedDeclined: false,
                offerAcceptedDeclined: false,
                newMatchesAlert: false,
            })
        }
    }

    /* To save data On button click*/
    saveData = () => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios
            .put("https://techm-jobzilla.herokuapp.com/jobs/user/notificationSetting", this.state, options)
            .then(Response => {
                console.log("Success..", Response)
                this.toast.show({ severity: 'success', detail: 'Data Saved Successfully', life: 2000 });
            })
            .catch(error => {
                console.log("Error Occured..", error)
                this.toast.show({ severity: 'error', detail: 'Something Went Wrong', life: 2000 });
            })
    }

    /* To get Previous state of toggle switches */
    componentDidMount() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios
            .get("https://techm-jobzilla.herokuapp.com/jobs/user/notificationSetting?candidateId=" + this.state.candidateId, options)
            .then(Response => {
                if (Response) {
                    this.setState({
                        allowNotification: Response.data.responseObject['allowNotification'],
                        successfulJobPost: Response.data.responseObject['successfulJobPost'],
                        newApplicationOnPostedJobs: Response.data.responseObject['newApplicationOnPostedJobs'],
                        interviewAcceptedDeclined: Response.data.responseObject['interviewAcceptedDeclined'],
                        offerAcceptedDeclined: Response.data.responseObject['offerAcceptedDeclined'],
                        newMatchesAlert: Response.data.responseObject['newMatchesAlert'],
                    })
                    //console.log(this.state)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    /* To handle Successful Job Post */
    handleJobPost = () => {
        this.setState(initialState => ({
            successfulJobPost: !initialState.successfulJobPost,
        }));

        /* If successful Job Post is disabled then allow notification is also disabled */
        if (!this.state.successfulJobPost === false) {
            this.setState({
                allowNotification: false
            })
        }
    }

    /* To handle New App Posted Job */
    handleNewAppPostedJob = () => {
        this.setState(initialState => ({
            newApplicationOnPostedJobs: !initialState.newApplicationOnPostedJobs
        }))

        /* If new Application Job Post is disabled then allow notification is also disabled*/
        if (!this.state.newApplicationOnPostedJobs === false) {
            this.setState({
                allowNotification: false
            })
        }
    }

    /* To handle interview accepted or declined */
    handleInterviewAccepted = () => {
        this.setState(initialState => ({
            interviewAcceptedDeclined: !initialState.interviewAcceptedDeclined,
        }))

        /* If interview Accepted/Declined is disabled then allow notification is also disabled */
        if (!this.state.interviewAcceptedDeclined === false) {
            this.setState({
                allowNotification: false
            })
        }
    }

    /* To handle offers Accepted or Declined */
    handleOffersAccepted = () => {
        this.setState(initialState => ({
            offerAcceptedDeclined: !initialState.offerAcceptedDeclined,
        }))

        /* If offers Accepted/Declined is disabled then allow notification is also disabled */
        if (!this.state.offerAcceptedDeclined === false) {
            this.setState({
                allowNotification: false
            })
        }
    }

    /* To handle New Match alert */
    handleNewMatchesAlert = () => {
        this.setState(initialState => ({
            newMatchesAlert: !initialState.newMatchesAlert,
        }))

        /* If new matches alert is disabled then allow notification is also disabled */
        if (!this.state.newMatchesAlert === false) {
            this.setState({
                allowNotification: false
            })
        }
    }

    render() {
        return (
            <Fragment>
                <LeftNav></LeftNav>
				<div className="maincontent toggled">
                <Toast ref={(el) => this.toast = el} />
                <div className="content">
                    <HeaderAll></HeaderAll>
                    <div className="content_section main">

                        {/* Content on the page */}
                        <div className="mt-3">
                            <p className="mb-0">Email Notification Preferences</p>
                            <p>Email Notifications options can be enabled/disabled from here. </p>
                            <section className="white-middle-section mt-4">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">

                                        {/* Allow Notication */}
                                        <div className="d-flex justify-content-between border-bottom-thick mb-4">
                                            <h5>Allow Notification</h5>
                                            <div>
                                                <label className="switch " >
                                                    <input type="checkbox" className="primary"
                                                        checked={this.state.allowNotification}
                                                        onChange={this.onToggle} />
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
                </div>
            </Fragment>
        )
    }
}
export default EmailSetting





