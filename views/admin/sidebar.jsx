const React = require('react')

const Sidebar = props => {
    return (
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">
                <img src="assets/images/fl.svg" class="d-inline-block align-top icon-32" alt="" loading="lazy" />
                <span class="brand-text">ForumLab</span>
            </div>
            <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action bg-light s-active">Dashboard</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Forums</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Users</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">Settings</a>
            </div>
        </div>
    )
}

module.exports = Sidebar