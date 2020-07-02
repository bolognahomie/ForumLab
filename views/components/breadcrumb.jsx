const React = require('react')

const Breadcrumb = props => {
    return (
        <div class="row">
            <div class="col-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active">Data</li>
                </ol>
            </div>
        </div>
    )
}

module.exports = Breadcrumb