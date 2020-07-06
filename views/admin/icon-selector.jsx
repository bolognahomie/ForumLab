const React = require('react')

const IconSelector = props => {
    return (
        <div class="form-group">
            <h6 class="card-subtitle mb-2 text-muted">Choose an Icon</h6>
            <input class="form-control mb-3" name="icon" type="text" id={props.id} placeholder="Please select an icon…" readonly=""></input>
            <ul class="nav nav-tabs">
                {props.packs.map(pack =>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href={`#${props.id}${pack.name}`}>{pack.name}</a>
                    </li>
                )}
                <li className="nav-item ml-auto">
                    <button type="button" class="btn btn-link iconPackModalBtn">Upload Icon Pack</button>
                </li>
            </ul>
            <div id={props.id} class="tab-content">
                {props.packs.map(pack =>
                    <div class="tab-pane fade" id={`${props.id}${pack.name}`}>
                        <div className="row">
                            {pack.icons.map(icon =>
                                <div className="col-1 text-center mt-1 mb-2">
                                    <img src={`/client/assets/images/icons/packs/${icon}`} icon={icon} class={`d-inline-block align-middle icon-24 icon-sel ${props.id}-click`} alt=""
                                        loading="lazy" />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

module.exports = IconSelector