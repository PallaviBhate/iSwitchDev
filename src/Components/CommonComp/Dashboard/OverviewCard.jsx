import React, { Component } from 'react'
//import CountUp from 'react-countup';

export default class OverviewCard extends Component {
    render() {
        return (
            <div>
                {/* Overview Section */}
                <div className="row ml-0 mr-1">
                    <h4 className="wid100 ml-4 marT20">Overview</h4>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section className="uploadedProfile_section">
                            <div className="media">
                                <img className="mr-3" src="images/dashboard-assets/uploaded-profile.svg" alt="Profile Uploaded image" />
                                <div className="media-body">
                                    <h5 className="mt-0 overview_numbers">
                                        20345
							{/* <CountUp start={0} end={confirmed.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of profile uploaded.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" className="more_ico" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section className="activeProfile_section">
                            <div className="media">
                                <img className="mr-3" src="images/dashboard-assets/active-profile.svg" alt="Active Profile image" />
                                <div className="media-body">
                                    <h5 className="mt-0 overview_numbers">
                                        15145
					        {/* <CountUp start={0} end={recovered.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of active profiles.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" className="more_ico" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section className="hiredProfile_section">
                            <div className="media">
                                <img className="mr-3 mt-2" src="images/dashboard-assets/offer-ico.svg" alt="Hired Profile image" />
                                <div className="media-body">
                                    <h5 className="mt-0 overview_numbers">
                                        1345
						    {/* <CountUp start={0} end={deaths.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of hired profile.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" className="more_ico" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/* Overview Section */}
            </div>
        )
    }
}



