import React, { Component } from 'react'
import axios from 'axios';

//local
// const base_url = 'http://localhost:9090/api/v1/employees/';

//heroku
const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/';

export default class ViewOne extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailid: '',
            employee: []
        }
    }


    componentDidMount = () => {
        axios.get(base_url + this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailid: response.data.emailid
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(base_url)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.firstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeEmailid = (e) => {
        this.setState({
            emailid: e.target.value
        })
    }
    onSubmit = (e) => {

        const employees = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.put(base_url + this.props.match.params.id, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <h3>Employee Details</h3>
                <br />
                <div className="row">
                    <div className="container col-md-8 mx-auto">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col-6">

                                <div className="form-group">
                                    <strong> First Name :</strong> {this.state.firstName}
                                </div>

                                <div className="form-group">
                                    <strong>Last Name : </strong>{this.state.lastName}
                                </div>
                                <div className="form-group">
                                    <strong> Email : </strong>{this.state.emailid}
                                </div>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/view"><button className="btn btn-primary" >OK</button> </a>

            </div >
        )
    }
}
