const React = require('react')

// Layout
const Admin = require('./layouts/admin.jsx')

// Components
const Navbar = require('./admin/sidebar.jsx')
const Topbar = require('./admin/topbar.jsx')
const IconSelector = require('./admin/icon-selector.jsx')
const PackUploader = require('./admin/pack-uploader.jsx')

const AdminForums = props => {
    return (
        <Admin>
            <Navbar user={props.user} />
            <div id="page-content-wrapper">
                <Topbar user={props.user} />
                <div class="container-fluid">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#manage">Manage</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#newforum">New Forum</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#newcat">New Category</a>
                        </li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                        <div class="tab-pane fade active show" id="manage">
                            <div class="row">
                                <div class="col-md-4 mt-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Forum Navigation</h4>
                                            <hr class="my-4" />
                                            <div class="dd" id="nestable-json"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="newforum">
                            <form action="/admin/new/forum" method="post">
                                <div class="row">
                                    <div class="col-md-4 mt-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">New Forum</h4>
                                                <hr class="my-4" />
                                                <div class="form-group">
                                                    <h6 class="card-subtitle mb-2 text-muted">Menu Name</h6>
                                                    <input type="text" class="form-control" name="menuname" id="menuname" />
                                                    <small class="form-text text-muted">The menu name will display on the
                                                    main forum navigation menu.</small>
                                                </div>
                                                <div class="form-group mt-4">
                                                    <h6 class="card-subtitle mb-2 text-muted">Header Name</h6>
                                                    <input type="text" class="form-control" name="headername" id="headername" />
                                                    <small class="form-text text-muted">The header name will display at the top
                                                    of the forum's page.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">Forum Icon</h4>
                                                <small class="form-text text-muted">This is the icon associated with the forum. It will display next to the menu name on the navigation menu, and next to the header name at the top of the forum's page.</small>
                                                <small class="form-text text-muted">You can choose an icon from one of the icon packs distributed with ForumLab, or you can upload your own pack. To upload a pack, add a new folder in "/assets/images/icon-packs/" with the name of your pack, then in that folder upload any .svg icons you want associated in that pack.</small>
                                                <hr class="my-4" />
                                                <IconSelector packs={props.packs} id="f" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary btn-lg mt-5">Create Forum</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="newcat">
                            <form action="/admin/new/category" method="post">
                                <div class="row">
                                    <div class="col-md-4 mt-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">New Category</h4>
                                                <hr class="my-4" />
                                                <div class="form-group">
                                                    <h6 class="card-subtitle mb-2 text-muted">Menu Name</h6>
                                                    <input type="text" class="form-control" name="menuname" id="menuname" />
                                                    <small class="form-text text-muted">The menu name will display on the
                                                    main forum navigation menu.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">Category Icon</h4>
                                                <small class="form-text text-muted">This is the icon associated with the category. It will display next to the menu name on the navigation menu.</small>
                                                <small class="form-text text-muted">You can choose an icon from one of the icon packs distributed with ForumLab, or you can upload your own pack. To upload a pack, add a new folder in "/assets/images/icon-packs/" with the name of your pack, then in that folder upload any .svg icons you want associated in that pack.</small>
                                                <hr class="my-4" />
                                                <IconSelector packs={props.packs} id="c" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-primary btn-lg mt-5">Create Category</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <PackUploader/>
            </div>

        </Admin >
    )
}

module.exports = AdminForums