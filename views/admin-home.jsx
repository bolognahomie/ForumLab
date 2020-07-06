const React = require('react')

// Layout
const Admin = require('./layouts/admin.jsx')

// Components
const Navbar = require('./admin/sidebar.jsx')
const Topbar = require('./admin/topbar.jsx')

const AdminHome = props => {
    return (
        <Admin>
            <Navbar user={props.user}/>
            <div id="page-content-wrapper">
                <Topbar user={props.user}/>
                <div class="container-fluid">
                    <h1>helo world</h1>
                </div>
            </div>
        </Admin>
    )
}

module.exports = AdminHome