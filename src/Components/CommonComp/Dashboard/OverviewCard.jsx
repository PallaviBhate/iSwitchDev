import React, { Component } from 'react'
//import CountUp from 'react-countup';

export default class OverviewCard extends Component {
    render() {
        return (
            <div>
                {/* Overview Section */}
                <div class="row ml-0 mr-1">
                    <h4 class="wid100 ml-4 marT20">Overview</h4>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section class="uploadedProfile_section">
                            <div class="media">
                                <img class="mr-3" src="images/dashboard-assets/uploaded-profile.svg" alt="Profile Uploaded image" />
                                <div class="media-body">
                                    <h5 class="mt-0 overview_numbers">
                                        20345
							{/* <CountUp start={0} end={confirmed.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of profile uploaded.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section class="activeProfile_section">
                            <div class="media">
                                <img class="mr-3" src="images/dashboard-assets/active-profile.svg" alt="Active Profile image" />
                                <div class="media-body">
                                    <h5 class="mt-0 overview_numbers">
                                        15145
					        {/* <CountUp start={0} end={recovered.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of active profiles.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                        <section class="hiredProfile_section">
                            <div class="media">
                                <img class="mr-3 mt-2" src="images/dashboard-assets/offer-ico.svg" alt="Hired Profile image" />
                                <div class="media-body">
                                    <h5 class="mt-0 overview_numbers">
                                        1345
						    {/* <CountUp start={0} end={deaths.value} duration={2.75} separator="," /> */}
                                    </h5>
							Number of hired profile.
							<img src="images/dashboard-assets/more_ico.png" width="10" height="10" class="more_ico" />
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



