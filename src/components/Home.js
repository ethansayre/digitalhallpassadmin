import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const lineoptions = {
    "maintainAspectRatio": false,
    "legend": {
        "display": false
    },
    "title": {},
    "scales": {
        "xAxes": [{
            "gridLines": {
                "color": "rgb(234, 236, 244)",
                "zeroLineColor": "rgb(234, 236, 244)",
                "drawBorder": false,
                "drawTicks": false,
                "borderDash": ["2"],
                "zeroLineBorderDash": ["2"],
                "drawOnChartArea": false
            },
            "ticks": {
                "fontColor": "#858796",
                "padding": 20
            }
        }],
        "yAxes": [{
            "gridLines": {
                "color": "rgb(234, 236, 244)",
                "zeroLineColor": "rgb(234, 236, 244)",
                "drawBorder": false,
                "drawTicks": false,
                "borderDash": ["2"],
                "zeroLineBorderDash": ["2"]
            },
            "ticks": {
                "fontColor": "#858796",
                "padding": 20
            }
        }]
    }
};

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avgm: "...",
            avgt: "...",
            usercount: "...",
            rendered: ""
        }
    }

    errorFunction = () => {
        alert("This function is not supported at this time. It will be added in a future release.");
    }

    renderChart = (json) => {        
        var labels = [];
        var data = [];

        json.map(function (val, index) {
            labels.push(months[val._id - 1]);
            data.push(Math.round(val.avg/1000));
        });

        var final = {
            "labels": labels,
            "datasets": [{
                "label": "Duration (seconds)",
                "fill": true,
                "data": data,
                "backgroundColor": "rgba(78, 115, 223, 0.05)",
                "borderColor": "rgba(78, 115, 223, 1)"
            }]
        };
        
        this.setState({ rendered: final });
    }

    millisToMinutesAndSeconds(millis) {
        if (isNaN(millis)) return millis;
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    componentDidMount = () => {
        fetch(`http://192.99.148.130:5010/api/v1/analytics/`)
            .then(res => res.json())
            .then(json => {
                this.setState({ avgt: json.data[0].avg })
            });

        fetch(`http://192.99.148.130:5010/api/v1/analytics?month=-1`)
            .then(res => res.json())
            .then(json => {
                this.setState({ avgm: json.data[0].avg })
            });
        fetch(`http://192.99.148.130:5010/api/v1/viewUsers?count=1`)
            .then(res => res.json())
            .then(json => {
                this.setState({ usercount: json.count })
            });
        fetch(`http://192.99.148.130:5010/api/v1/analytics?month=0`)
            .then(res => res.json())
            .then(json => {
                // this.setState({ chartdata: json.data });
                this.renderChart(json.data);
            });
        
    }

    render() {
        return (
            <div class="container-fluid">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">McMillen Digital Hall Pass</h3><a onClick={this.errorFunction} class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a></div>
                    <div class="row">
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-primary py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Average Time OUT (Monthly)</span></div>
                                            <div class="text-dark font-weight-bold h5 mb-0"><span>{this.millisToMinutesAndSeconds(this.state.avgm)}</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-primary py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Average Time OUT (Holistic)</span></div>
                                            <div class="text-dark font-weight-bold h5 mb-0"><span>{this.millisToMinutesAndSeconds(this.state.avgt)}</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-info py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-info font-weight-bold text-xs mb-1"><span>NUmber of students</span></div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="text-dark font-weight-bold h5 mb-0 mr-3"><span>{this.state.usercount}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-warning py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>NOTIFICATIONS / ALERTS</span></div>
                                            <div class="text-dark font-weight-bold h5 mb-0"><span>0</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-comments fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-xl-12">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h6 class="text-primary font-weight-bold m-0">Duration Overview</h6>
                                    <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                                        <div class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                                            role="menu">
                                            <p class="text-center dropdown-header">dropdown header:</p><a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#">&nbsp;Action</a><a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#">&nbsp;Another action</a>
                                            <div class="dropdown-divider"></div><a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#">&nbsp;Something else here</a></div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    {this.state.rendered == "" ? null : <div class="chart-area"><Line data={this.state.rendered} width={1458} height={640} options={lineoptions} /></div>}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;