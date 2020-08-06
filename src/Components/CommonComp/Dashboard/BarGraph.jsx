import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Assets/css/Style.css'
import { Bar } from 'react-chartjs-2';

//Static data Displayed in bars
const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
    datasets: [
        {
            label: "Number of Profile Uploaded",
            backgroundColor: "#3e95cd",
            data: [133, 221, 783, 2478, 133, 221, 783, 2478, 133, 221, 783, 2478]
        }, {
            label: "Number of Job Posted",
            backgroundColor: "#8e5ea2",
            data: [408, 547, 675, 734, 408, 547, 675, 734, 408, 547, 675, 734]
        }, {
            label: "Number of Hired Candidates",
            backgroundColor: "#ccc",
            data: [205, 305, 400, 1200, 205, 305, 400, 1200, 205, 305, 400, 1200]
        }
    ]
}
//Static data Displayed in bars

export default class BarGraph extends Component {
    render() {
        return (
            <div>
                {/* Monthly Reports percentage section */}
                <div class="row ml-0 mr-1">
                    <div class="col col-sm-12 col-md-12 col-lg-12">
                        <h4 class="wid100 ml-3 marT30">Monthly Report</h4>
                        <section class="chart_section">
                            <div class="wid10 float-left ml-3">
                                <span class="Uploaded_number">58%</span>
                                <span>UPLOADED</span>
                            </div>
                            <div class="wid10 float-left">
                                <span class="posted_number">32%</span>
                                <span>POSTED</span>
                            </div>
                            <div class="wid10 float-left">
                                <span class="hired_number">10%</span>
                                <span>HIRED</span>
                            </div>
                            {/* Monthly Reports Percentage section */}

                            {/* Select Year DropDown */}
                            <div class="dropdown float-right mr-2">
                                <button class="btn chart_section_btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Year
						  </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">2020</a>
                                    <a class="dropdown-item" href="#">2019</a>
                                    <a class="dropdown-item" href="#">2018</a>
                                </div>
                            </div>
                            {/* Select Year DropDown */}


                            {/* Bar Graph Section */}
                            <div class="chart-container" width="100" height="100">
                                {/* <canvas id="bar-chart-grouped"></canvas> */}
                                <Bar
                                    type='bar'
                                    data={state}
                                    options={{
                                        title: {
                                            position: 'bottom',
                                            display: true,
                                            // text: 'Population growth (millions)'
                                        },
                                        legend: {
                                            position: 'bottom'
                                        },
                                        layout: {
                                            padding: {
                                                top: 50,
                                                left: 20,
                                                right: 20
                                            }

                                        }
                                    }

                                    }
                                />
                                {/* Bar Graph Section */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
