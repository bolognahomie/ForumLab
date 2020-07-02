const React = require('react')

// Components
const NavbarUser = require('./navbar-user.jsx')

const Navbar = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/client/assets/images/icons/fl.svg" class="d-inline-block align-top icon-32" alt=""
                        loading="lazy"/>
                    <span class="brand-text">ForumLab</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto ml-5">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/members">Members</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/upgrade">Upgrade</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/help">Help</a>
                        </li>
                    </ul>
                    <NavbarUser user={props.user}/>
                </div>
            </div>
        </nav>
    )
}

module.exports = Navbar