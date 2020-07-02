const React = require('react')

const Admin = props => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>ForumLab | Admin</title>
                <script src="https://kit.fontawesome.com/7eb94764c1.js" crossorigin="anonymous"></script>
                <link href="assets/css/strapped.css" rel="stylesheet" />
                <link rel="stylesheet" href="assets/css/nest.css" />
                <link href="assets/css/extend.css" rel="stylesheet" />
            </head>
            <body>
                <div class="d-flex" id="wrapper">
                    {props.children}
                </div>
                <script src="assets/js/jquery.js"></script>
                <script src="assets/js/popper.js"></script>
                <script src="assets/js/bootstrap.js"></script>
                <script src="assets/js/nest.js"></script>
            </body>
        </html>
    )
}

module.exports = Admin