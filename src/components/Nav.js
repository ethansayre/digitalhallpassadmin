import React, { Component } from "react";
import { Link } from 'react-router-dom';

class componentName extends Component {
    errorFunction = () => {
        alert("This function is not supported at this time. It will be added in a future release.");
    }

    render() {
        return (
            <div>
                <div id="wrapper">
                    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                        <div class="container-fluid d-flex flex-column p-0">
                            <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                                <div class="sidebar-brand-icon rotate-n-15"></div>
                                <div class="sidebar-brand-text mx-3"><span>Administration</span></div>
                            </a>
                            <hr class="sidebar-divider my-0" />
                            <ul class="nav navbar-nav text-light" id="accordionSidebar">
                                <li class="nav-item" role="presentation"><Link to="/" exact class="nav-link active"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
                            </ul>
                            <ul class="nav navbar-nav text-light" id="accordionSidebar">
                                <li class="nav-item" role="presentation"><Link to="/users" exact class="nav-link active"><i class="fas fa-user-friends"></i><span>Users</span></Link></li>
                            </ul>
                            <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                        </div>
                    </nav>
                    <div class="d-flex flex-column" id="content-wrapper">
                        <div id="content">
                            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                                <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                                    <form class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Find a student..." />
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                    <ul class="nav navbar-nav flex-nowrap ml-auto">
                                        <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i class="fas fa-search"></i></a>
                                            <div class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                                                <form class="form-inline mr-auto navbar-search w-100" onSubmit={this.errorFunction} >
                                                    <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                        <div class="input-group-append"><button onClick={this.errorFunction} class="btn btn-primary py-0" type="submit"><i class="fas fa-search"></i></button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <div class="d-none d-sm-block topbar-divider"></div>
                                        <li class="nav-item dropdown no-arrow" role="presentation">
                                            <li class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span class="d-none d-lg-inline mr-2 text-gray-600 small">Ethan Sayre</span><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" /></a>
                                                <div
                                                    class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                                    <a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                                        <div class="dropdown-divider"></div><a onClick={this.errorFunction} class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                                </li>
                                </li>
                                </ul>
                        </div>
                        </nav>
                        {this.props.toRender}
                </div>
                <footer class="bg-white sticky-footer">
                    <div class="container my-auto">
                        <div class="text-center my-auto copyright"><span>Developed by Ethan Sayre 2019</span></div>
                    </div>
                </footer>
                </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
            </div>
        );
    }
}
export default componentName;