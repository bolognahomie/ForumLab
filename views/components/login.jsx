const React = require('react')

const Login = props => {
    return (
        <div class="col-sm-4 mx-auto">
            <div class="card bg-secondary mb-3 mt-3">
                <div class="card-body">
                    <h4 class="card-title">Login to an existing account...</h4>
                    <form action="/authenticate/login" method="post">
                        <div class="form-group login-form-group mx-auto">
                            <input type="text" class="form-control" name="username" placeholder="Username" />
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <input type="password" class="form-control" name="password" placeholder="Password" />
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <a href="/forgot">Forgot password?</a>
                            <button type="submit" class="btn btn-primary float-right">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

module.exports = Login