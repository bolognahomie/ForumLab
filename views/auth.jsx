const React = require('react')

// Layout
const Default = require('./layouts/default.jsx')

// Components
const Navbar = require('./components/navbar.jsx')
const Login = require('./components/login.jsx')
const Register = require('./components/register.jsx')

const Home = props => {
    return (
        <Default>
            <Navbar user={props.user}/>
            <div class="main">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="jumbotron">
                                <h1 class="display-3">Welcome to ForumLab!</h1>
                                <p class="lead">ForumLab is an open source next-gen forum software. Create an account now to check it out!</p>
                                <hr class="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </div>
        </Default>
    )
}

module.exports = Home