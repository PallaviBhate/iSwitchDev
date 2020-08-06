import React, { Component } from 'react'

export default class TopSkillsCard extends Component {
    render() {
        return (
            <div>
                {/* <!--TOP Skills section--> */}
                <div class="row ml-0 mr-1">
                    {/* <!--TOP Skills published section--> */}
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 pr-0">
                        <h4 class="wid100 ml-3 marT30">TOP SKILLS Required</h4>
                        <section class="skillPosted_section">
                            <table class="table border-top-0">
                                <thead>
                                    <tr>
                                        <th class="border-top-0 border-light">SKILLS</th>
                                        <th class="border-top-0 border-light"> Number of jobs posted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/java_logo.jpg" width="30" height="30" class="rounded-circle" />
                                            <span class="">JAVA</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/angular_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">Angular</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/nodejs_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">Node JS</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/android_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">Android</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                    {/* <!--TOP Skills published section-->	 */}

                    {/* <!--TOP Skills Unfulfilled section-->	 */}
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 pl-0">
                        <h4 class="wid100 ml-3 marT30">TOP SKILLS Unfulfilled</h4>
                        <section class="skillsUnfulfilled_section">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="border-top-0 border-light">SKILLS</th>
                                        <th class="border-top-0 border-light"> Number of jobs posted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/mongodb_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">MONGO DB</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/python_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">PYTHON</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/php_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">PHP</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-top-0">
                                            <img src="images/dashboard-assets/swift_logo.png" width="30" height="30" class="rounded-circle" />
                                            <span class="">SWIFT</span>
                                        </td>
                                        <td class="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                    {/* <!--TOP Skills Unfulfilled section--> */}
                </div>
                {/* <!--TOP Skills section--> */}
            </div>
        )
    }
}
