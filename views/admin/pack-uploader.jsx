const React = require('react')

const PackUploader = props => {
    return (
        <form ref='uploadForm'
            id='uploadForm' action="/admin/upload/icon-pack" method="post" encType="multipart/form-data">
            <input name="packzip" type="file" />
            <button type="submit">Upload</button>
        </form>
    )
}

module.exports = PackUploader