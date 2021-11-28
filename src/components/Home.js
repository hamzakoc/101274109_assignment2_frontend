import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a Full Stack CRUD Application created by Hamza Koc</p>

                    <p>Frontend : React.js, Axios, Bootstrap, react-router, react-router-dom</p>
                    <p>Backend : Node.js, Express.js, MongoDB, Mongoose, Nodemon, Body-Parser</p>



                    <p >
                        <a class="btn btn-primary btn-sm" href="https://github.com/hamzakoc" target="_blank" role="button">GitHub</a>
                    </p>
                </div>
            </div>
        )
    }
}
