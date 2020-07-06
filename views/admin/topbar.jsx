const React = require('react')

const Topbar = props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="ml-auto mr-5">
                    <img src={`/client/assets/images/icons/${props.user.info.avatar}`} class="d-inline-block align-middle icon-32" alt=""
                        loading="lazy" />
                    <div class="d-inline-block align-middle ml-2">
                        <div class="dropdown">
                            <a class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                <span class="nav-username">{props.user.info.username}<span class="text-small"> <span
                                    class="badge badge-success">{props.user.info.level}</span></span><span
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
            </div>
        </nav>
    )
}

module.exports = Topbar