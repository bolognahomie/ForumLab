const React = require('react')

const PackUploader = props => {
    return (
        <div class="modal" id="uploadModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form ref='uploadForm'
                        id='uploadForm' action="/admin/upload/icon-pack" method="post" encType="multipart/form-data">
                        <div class="modal-header">
                            <h5 class="modal-title">Icon Pack Uploader</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input name="packzip" type="file" />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" id="packUploadBtn" class="btn btn-primary">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

module.exports = PackUploader