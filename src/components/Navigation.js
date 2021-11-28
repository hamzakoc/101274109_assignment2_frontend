import React from 'react'
import { Navbar, Nav } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Create from './Create';
import Update from './Update';
import View from './View';
import ViewOne from './ViewOne';
import Home from './Home';


function Navigation() {

    return (
        < Router>

            <Navbar className="navbar navbar-expand navbar-dark bg-dark ">
                <Nav className="navbar-nav mx-auto">
                    <Link to="/#" className="nav-item nav-link text-light" >Home</Link>
                    <Link to="/view" className="nav-item nav-link text-light">View</Link>
                    <Link to="/create" className="nav-item nav-link text-light" >Create</Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route path="/" exact ><Home /></Route>
                <Route path="/view"><View /></Route>
                <Route path='/view' render={(props) => <View {...props} />} />
                <Route path="/create"><Create /></Route>
                <Route path='/update/:id' render={(props) => <Update {...props} />} />
                <Route path='/viewone/:id' render={(props) => <ViewOne {...props} />} />
            </Switch>

        </Router>
    )

}

export default Navigation;