const React = require('react')

// Layout
const Default = require('./layouts/default.jsx')

// Components
const Navbar = require('./components/navbar.jsx')
const ForumTree = require('./components/forum-tree.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const ThreadList = require('./components/thread-list.jsx')

const Home = props => {
    return (
        <Default>
            <Navbar user={props.user}/>
            <div class="main">
                <div class="container">
                    <div class="row mt-5">
                        <ForumTree/>
                        <div class="col-sm-9">
                            <Breadcrumb/>
                            <ThreadList/>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    )
}

module.exports = Home