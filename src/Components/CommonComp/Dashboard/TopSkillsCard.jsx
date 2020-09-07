import React, { Component } from 'react'

export default class TopSkillsCard extends Component {
    render() {
        return (
            <div>
                {/* <!--TOP Skills section--> */}
                <div className="row ml-0 mr-1">
                    {/* <!--TOP Skills published section--> */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 pr-0">
                        <h4 className="wid100 ml-3 marT30">TOP SKILLS Required</h4>
                        <section className="skillPosted_section">
                            <table className="table border-top-0">
                                <thead>
                                    <tr>
                                        <th className="border-top-0 border-light">SKILLS</th>
                                        <th className="border-top-0 border-light"> Number of jobs posted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/java_logo.jpg" width="30" height="30" className="rounded-circle" />
                                            <span className="">JAVA</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/angular_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">Angular</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/nodejs_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">Node JS</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/android_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">Android</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                    {/* <!--TOP Skills published section-->	 */}

                    {/* <!--TOP Skills Unfulfilled section-->	 */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 pl-0">
                        <h4 className="wid100 ml-3 marT30">TOP SKILLS Unfulfilled</h4>
                        <section className="skillsUnfulfilled_section">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="border-top-0 border-light">SKILLS</th>
                                        <th className="border-top-0 border-light"> Number of jobs posted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/mongodb_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">MONGO DB</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/python_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">PYTHON</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/php_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">PHP</span>
                                        </td>
                                        <td className="border-top-0">
                                            <meter value="6" min="0" max="10">6 out of 10</meter>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-top-0">
                                            <img src="images/dashboard-assets/swift_logo.png" width="30" height="30" className="rounded-circle" />
                                            <span className="">SWIFT</span>
                                        </td>
                                        <td className="border-top-0">
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
