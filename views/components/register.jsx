const React = require('react')

const Register = props => {
    return (
        <div class="col-sm-4 mx-auto">
            <div class="card bg-secondary mb-3 mt-3">
                <div class="card-body">
                    <h4 class="card-title">Create a new account...</h4>
                    <form action="/authenticate/register" method="post">
                        <div class="form-group login-form-group mx-auto">
                            <input type="text" class="form-control" name="username" placeholder="Username" />
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <input type="email" class="form-control" name="email" placeholder="Email address" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <input type="password" class="form-control" name="password" placeholder="Password" />
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <input type="password" class="form-control" name="password2" placeholder="Confirm password" />
                        </div>
                        <div class="form-group login-form-group mx-auto">
                            <button type="submit" class="btn btn-primary float-right">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

module.exports = Register