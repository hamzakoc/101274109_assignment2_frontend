import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


//local
// const base_url = 'http://localhost:9090/api/v1/employees/';

//heroku
const base_url = 'https://gbc-crud-backend.herokuapp.com/api/v1/employees/';


const Employees = props => (



    <tbody>
        <tr>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.emailid}</td>
            <td class="d-flex justify-content-around">
                <Link to={"/update/" + props.employee._id} ><button className="btn-info" >Update</button></Link>
                <Link to={"/view"}  >
                    <button className="btn-danger" onClick={(e) => { props.deleteEmployee(props.employee._id) }}>Delete</button>
                </Link>
                <Link to={"/viewone/" + props.employee._id} ><button className="btn-info">View</button></Link>
            </td>

        </tr>
    </tbody>



)


export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = { employee: [] };
    }



    componentDidMount() {
        axios.get(base_url)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch((error) => {
                console.log(error);
            })


    }


    employeesList() {
        return this.state.employee.map(emp => {
            return <Employees className="card-deck card" employee={emp} key={emp._id} deleteEmployee={this.deleteEmployee} />;
        })
    }


    deleteEmployee(id) {

        axios.delete(base_url + id)
            .then(response => { console.log(response.data) });

        window.location.reload(false);
    }



    render() {
        return (
            <div>

                <br /><br /><br />
                <h1>List of  Employee</h1>
                <br />
                <Link to={"/create"} ><button className="btn-info">Create</button></Link>
                <br /><br />

                <div className="row">

                    <div className="container col-md-8 mx-auto">

                        <div className="row">

                            <div className="col">

                            </div>

                            <div className="col-10">

                                <table className="table table-striped">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    {this.employeesList()}
                                </table >
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
