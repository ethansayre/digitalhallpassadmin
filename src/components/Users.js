import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            grade: "",
            id: ""
        }
    }

    errorFunction = () => {
        alert("This function is not supported at this time. It will be added in a future release.");
    }

   componentDidMount = () => {
        fetch(`http://192.99.148.130:5010/api/v1/viewUsers`)
            .then(res => res.json())
            .then(json => {
                this.setState({ studentList: json })
            });
    }

    updateUsers = (e) => {
        if (e !== undefined) e.preventDefault();
        fetch(`http://192.99.148.130:5010/api/v1/viewUsers`)
            .then(res => res.json())
            .then(json => {
                this.setState({ studentList: json })
            });
    }

    processRegister = (e) => {
        e.preventDefault();
        fetch(`http://192.99.148.130:5010/api/v1/users/register`, {method: "POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"name": this.state.name, "grade": parseInt(this.state.grade), "id": parseInt(this.state.id)})})
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.error !== undefined) {
                    alert(json.error);
                }
                if (json.message !== undefined) {
                    alert(json.message);
                    this.updateUsers();
                    this.setState({name: "", id: "", grade: ""});
                }
            });
    }

    deleteUser = (e, id) => {
        e.preventDefault();
        fetch(`http://192.99.148.130:5010/api/v1/users/delete/${id}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.error !== undefined) {
                    alert(json.error);
                }
                this.updateUsers();
            });
    }

    handleName = (event) => {
       this.setState({name: event.target.value});
    }

    handleGrade = (event) => {
       this.setState({grade: event.target.value});
    }

    handleID = (event) => {
       this.setState({id: event.target.value});
    }

    renderUsers = () => {
        if (this.state.studentList == undefined) return;

        var toReturn = [];
        this.state.studentList.map((val, ind) => {
            toReturn.push(<li class="list-group-item">
                                <div class="row align-items-center no-gutters">
                                    <div class="col mr-2">
                                        <h6 class="mb-0"><strong>{val.name}</strong></h6><span class="text-xs">{"ID: " + val._id + " | Grade: " + val.grade}</span></div>
                                    <div class="col-auto">
                                        <a href="/" onClick={(event) => {this.deleteUser(event, val._id)}}><i class="fas fa-trash"></i></a>
                                    </div>
                                </div>
                            </li>);
        });
        return toReturn;
    }

    render() {
        return (
            <div class="container-fluid">
                    <div class="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">McMillen Digital Hall Pass</h3><a onClick={this.errorFunction} class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a></div>
                    <div class="row">
                        <div class="col-md-12 col-xl-12 mb-4">
                            <div class="card shadow border-left-info py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-info font-weight-bold text-xs mb-1"><span>Number of students</span></div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="text-dark font-weight-bold h5 mb-0 mr-3"><span>{this.state.studentList ? this.state.studentList.length : "..."}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-12 mb-4">
                            <div class="card shadow border-left-info py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-info font-weight-bold text-xs mb-1"><span>Create a user</span></div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                <form class="form-inline d-none d-sm-inline-block mr-auto my-2 my-md-0 mw-100 navbar-search" onSubmit={this.processRegister}>
                                                    <div class="input-group mb-2 mt-2"><input onChange={this.handleName} value={this.state.name} class="bg-light form-control border-0 small" type="text" placeholder="Student Name" />
                                                    </div>
                                                    <div class="input-group mb-2"><input onChange={this.handleGrade} value={this.state.grade} class="bg-light form-control border-0 small" type="text" placeholder="Student Grade" />
                                                    </div>
                                                    <div class="input-group"><input onChange={this.handleID} value={this.state.id} class="bg-light form-control border-0 small" type="text" placeholder="Student ID" />
                                                        <div class="input-group-append"><button class="btn btn-primary py-0" type="submit"><i class="fas fa-plus"></i></button></div>
                                                    </div>
                                                </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-pen fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="row">
                    <div class="col-lg-12 mb-4">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex py-3 justify-content-between align-items-center">
                                <h6 class="text-primary font-weight-bold m-0">User List</h6>
                                <a href="/" onClick={this.updateUsers}><i class="fas fa-sync-alt"></i></a>
                            </div>
                            <ul class="list-group list-group-flush">
                                {this.renderUsers()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;