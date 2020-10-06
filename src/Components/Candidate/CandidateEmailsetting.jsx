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
            allowNotifications:false,
            newInvite: false,
            interviewAcceptedDeclinedByRecruiter: false,
            changeInApplicationStatus: false,
            newOffer: false
        };
        this.onAllowNotificationTogggleChange = this.onAllowNotificationTogggleChange.bind(this)
        this.onNewInviteChange = this.onNewInviteChange.bind(this)
        this.onNewOfferChange = this.onNewOfferChange.bind(this)
        this.onInviteAcceptedDeclineChange = this.onInviteAcceptedDeclineChange.bind(this)
        this.onChangeInApplicationStatusChange = this.onChangeInApplicationStatusChange.bind(this)
    }

    /*To handle Allow Notification Toggle */
    onAllowNotificationTogggleChange = (e) => {
        this.setState({
            allowNotifications: true,
            newInvite: true,
            inviteAcceptedDeclinedByRecruiter: true,
            changeInApplicationStatus: true,
            newOffer: true
        })

        /*If allow notifications toggler is disabled then all child togglers are disabled*/
        if (!this.state.allowNotifications === false) {
            this.setState({
                allowNotifications:false,
                newInvite: false,
                inviteAcceptedDeclinedByRecruiter: false,
                changeInApplicationStatus: false,
                newOffer: false
                })
        }
    }

    /* To handle New Invite Change */
    onNewInviteChange = () => {
        this.setState(initialState => ({
            newInvite: !initialState.newInvite,
        })
        )
        /* If new invite checkbox is disabled then allow notification is also disabled */
        if (!this.state.newInvite === false) {
            this.setState({
                allowNotifications: false
            })
        }
    }

    /* To handle invite accepted/Declined by recruiter */
    onInviteAcceptedDeclineChange = () => {
        this.setState(initialState => ({
            inviteAcceptedDeclinedByRecruiter: !initialState.inviteAcceptedDeclinedByRecruiter,
        })
        )
        /* If Invite Accepted/Declined by recruiter checkbox is disabled then allow notification is also disabled */
        if (!this.state.inviteAcceptedDeclinedByRecruiter === false) {
            this.setState({
                allowNotifications: false
            })
        }
    }

    /* To handle change in application status */
    onChangeInApplicationStatusChange = () => {
        this.setState(initialState => ({
            changeInApplicationStatus: !initialState.changeInApplicationStatus,
        })
        )
        /* If change in application status is disabled then allow notification is also disabled */
        if (!this.state.changeInApplicationStatus === false) {
            this.setState({
                allowNotifications: false
            })
        }
    }

    /* To handle new offer */
    onNewOfferChange = () => {
        this.setState(initialState => ({
            newOffer: !initialState.newOffer,
        })
        )
        /* If new Offer is disabled then allow notification is also disabled */
        if (!this.state.newOffer === false) {
            this.setState({
                allowNotifications: false
            })
        }
    }


    /* To save Data */
    saveData = () => {
        console.log(" data saved Successfully")
        this.toast.show({ severity: 'success', summary: 'Success Message', detail: 'Settings Updated Successfully' }, 50000);

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
                        <HeaderAll isSetting={true} isCandidate={true}></HeaderAll>
                        <div className="content_section main">

                            {/* Content on the page */}
                            <div className="mt-3 setting setting_text1">
                            <div className=" mb-3">
                                {/**  
                                 * If recruiter toggle is active then from email settings component recruiter dashboard will open else provider dashboard will open
                                 **/}      
                            <Link to="/candidate/dashboard">
                            <img className="setting_arrow marR5" src="/images/EmailSettings/backward-link-arrow.svg" alt="arrow"/>
                            </Link>
                            Dashboard</div>
                                <div className="setting settingTitle_text mb-2">Email Notification Preferences</div>
                                <div className="setting setting_text">You can manage your preferences for email notifications from here</div>
                                <section className="white-middle-section mt-4">
                                    <div className="row">
                                        <div className="col-md-8 offset-md-2">

                                            {/* Allow Notication */}
                                            <div className="d-flex justify-content-between border-bottom-thick mb-4">
                                                <div className="settingSubtitle_text">Allow Notifications</div>
                                                <div>
                                                    <label className="switch " >
                                                        <input type="checkbox" className="primary"
                                                            checked={this.state.allowNotifications}
                                                            onChange={this.onAllowNotificationTogggleChange}
                                                        />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                {/* New Invite */}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">New Invite</div>
                                                    <div>
                                                        <label className="container">
                                                            <input
                                                                type="checkbox"
                                                                checked={this.state.newInvite}
                                                                onChange={this.onNewInviteChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Invite accepted/declined by recruiter*/}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">Invite accepted/declined by recruiter</div>
                                                    <div>
                                                        <label className="container">
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.inviteAcceptedDeclinedByRecruiter}
                                                                onChange={this.onInviteAcceptedDeclineChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* Change in application status*/}
                                                  <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">Change in application status</div>
                                                    <div>
                                                        <label className="container">
                                                            <input type="checkbox" className="primary"
                                                                checked={this.state.changeInApplicationStatus}
                                                                onChange={this.onChangeInApplicationStatusChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                           {/* New Offer*/}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="setting_text">New Offer</div>
                                                    <div>
                                                        <label className="container">
                                                            <input
                                                                type="checkbox"
                                                                checked={this.state.newOffer}
                                                                onChange={this.onNewOfferChange}
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





