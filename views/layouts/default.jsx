const React = require('react')

const Default = props => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ForumLab | Home</title>
                <link rel="stylesheet" href="/client/assets/css/bootstrap.css" />
                <script src="https://kit.fontawesome.com/7eb94764c1.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="/client/assets/css/treeview.css" />
                <link rel="stylesheet" href="/client/assets/css/extend.css" />
            </head>
            <body>
                {props.children}
                <script src="/client/assets/js/jquery.js"></script>
                <script src="/client/assets/js/popper.js"></script>
                <script src="/client/assets/js/bootstrap.js"></script>
                <script src="/client/assets/js/treeview.js"></script>

            </body>
        </html>
    )
}

module.exports = Default