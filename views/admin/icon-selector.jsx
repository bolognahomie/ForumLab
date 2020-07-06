const React = require('react')

const IconSelector = props => {
    return (
        <div class="form-group">
            <h6 class="card-subtitle mb-2 text-muted">Choose an Icon Pack</h6>
            <select class="form-control icon-selector" name="icon">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

module.exports = IconSelector