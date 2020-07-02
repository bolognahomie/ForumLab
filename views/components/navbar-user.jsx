const React = require('react')

const NavbarUser = props => {
    if (props.user.loggedIn === false) {
        return (
            <div class="user-dropdown-container my-2 my-lg-0" id="loggedOut">
                <a type="button" href="/authenticate" class="btn btn-success">Login</a>
            </div>
        )
    } else {
        return (
            <div class="user-dropdown-container my-2 my-lg-0" id="loggedIn">
                <img src="/client/assets/images/icons/monster.svg" class="d-inline-block align-middle icon-32" alt=""
                    loading="lazy" />
                <div class="d-inline-block align-middle ml-2">
                    <div class="dropdown">
                        <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                            <span class="nav-username">{props.user.info.username}<span class="text-small"> <span
                                class="badge badge-level">{props.user.info.level}</span></span><span
                                    class="caret"></span></span>

                        </a>
                        <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/messages">Messages</a>
                            <a class="dropdown-item" href="/profile">Profile</a>
                            <a class="dropdown-item" href="/account">Account Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/authenticate/logout">Logout</a>
                        </div>
                    </div>
                    <span class="text-small"><span class="badge badge-info">Administrator</span></span>
                </div>
            </div>
        )
    }
}

module.exports = NavbarUser