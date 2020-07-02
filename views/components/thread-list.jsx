const React = require('react')

const ThreadList = props => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="light-panel">
                    <h5>Discussions</h5>
                    <hr class="my-2" />
                    <table class="discussion-stream">
                        <tr class="discussion">
                            <td class="counters inline-container mute">
                                <div class="replies text-center">
                                    <span class="counter">0</span>
                                    <span>Replies</span>
                                </div>
                                <div class="views text-center">
                                    <span class="counter">10</span>
                                    <span>Views</span>
                                </div>
                            </td>
                            <td class="discussion-title">
                                <a href="#" class="discussion-link">Lorem ipsum dolor sit amet consectetur?</a>
                                <div class="author mt-2">
                                    <span class=""><img src="/client/assets/images/icons/monster.svg" class="d-inline-block align-middle icon-16" alt=""
                                        loading="lazy" /> devlight<span class="text-small"> <span
                                            class="badge badge-level">1</span></span></span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

module.exports = ThreadList