import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Assets/css/Style.css'
import { Bar as BarChart } from 'react-chartjs-2'
import '../../CommonComp/DashboardComp/RoundedBars'

const state = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
    datasets: [
        
        {
            label: "Number of Profile Uploaded",
            backgroundColor: "#FB4E4E",
            data: [133, 133, 133, 133, 450, 133, 205, 278, 133, 221,150, 125]
        }, {
            label: "Number of Job Posted",
            backgroundColor: "#3398FF",
            data: [208, 201, 105, 34, 133, 47, 55, 234, 208, 147, 235, 360]
        }, {
            label: "Number of Hired Candidates",
            backgroundColor: "#2AC769",
            data: [100, 305, 360, 200, 256, 155, 180, 120, 205, 305, 100, 200]
        }
    ]
}
//Static data Displayed in bars

export default class BarGraph extends Component {
    render() {
        return (
            <div>
                {/* Monthly Reports percentage section */}
                <div className="row ml-0 mr-1">
                    <div className="col col-sm-12 col-md-12 col-lg-12">
                        <h4 className="yearly_report_text wid100 ml-3 marT30">Yearly Report</h4>
                        <section className="chart_section">
                            <div className="wid10 float-left ml-3">
                                <span className="Uploaded_number">58%</span>
                                <span className="Uploaded_number_text">UPLOADED</span>
                            </div>
                            <div className="wid10 float-left">
                                <span className="posted_number">32%</span>
                                <span className="Uploaded_number_text">POSTED</span>
                            </div>
                            <div className="wid10 float-left">
                                <span className="hired_number">10%</span>
                                <span className="Uploaded_number_text">HIRED</span>
                            </div>
                            {/* Monthly Reports Percentage section */}

                            {/* Select Year DropDown */}
                            <div className="dropdown float-right mr-2">
                                <button className="btn chart_section_btn dropdown-toggle font-blue" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Year
                          </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">2020</a>
                                    <a className="dropdown-item" href="#">2019</a>
                                    <a className="dropdown-item" href="#">2018</a>
                                </div>
                            </div>
                            {/* Select Year DropDown */}


                            {/* Bar Graph Section */}
                            <div className="chart-container" width="100" height="100">
                                {/* <canvas id="bar-chart-grouped"></canvas> */}
                                <BarChart
                                    type='Bar'
                                    data={state}
                                    options={{
                                        cornerRadius: 8,
                                        height: "50",
                                        scales: {
                                            xAxes: [{
                                              barPercentage: 0.6,
                                              categoryPercentage: 0.5,
                                            
                                              gridLines: {
                                                drawBorder: false,
                                                display:false, 
                                              },
                                            }],
                                            yAxes: [{
                                                ticks: {
                                                    //suggestedMin: 0,
                                                    //stepSize: 30
                                                },
                                                gridLines: {
                                                    //display: false,
                                                    drawBorder: false,
                                                    zeroLineColor: '#fff'
                                                  },
                                              }]
                                            },
                                        title: {
                                            //position: 'bottom',
                                            //display: true,
                                            // text: 'Population growth (millions)'
                                        },
                                        legend: {
                                            position: 'bottom',
                                            padding:30,
                                            labels: {
                                                usePointStyle: true,
                                                //boxWidth: 60
                                            }
                                        },
                                        tooltips:{
                                            callbacks: {
                                                labelColor: function(tooltipItem, chart) {
                                                    return {
                                                        bodyAlign:'left',
                                                        borderColor: "#ffffff",
                                                        //backgroundColor: 'rgb(255, 0, 0)'
                                                    };
                                                },
                                                labelTextColor: function(tooltipItem, chart) {
                                                    return '#543453';
                                                }
                                            },
                                            displayColors: false,
                                            bodyAlign:'left',
                                            enabled:true,
                                            // titleFontColor:'#2E2E2EE5',
                                            borderColor:'#DBDDE0',
                                            borderWidth: 2,
                                            backgroundColor: '#ffffff'
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
