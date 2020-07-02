// Express Router
const router = require('express').Router()

// Packages
const cookieSession = require('cookie-session')
const ForumLab = require('../controllers/ForumLab.js')

router.use(cookieSession({
    name: 'session',
    secret: 'RECORE_CLIENT_SESSION_643563758568568'
}))
// router.get('/users',
//   (req, res) => ForumLab.getUsers(items => res.json(items), req, res))


// User Authentication
router.get('/authenticate', (req, res) => ForumLab.user(req, res, user => {
    res.render('auth', { user })
}))
router.post('/authenticate/login', (req, res) => ForumLab.users.authenticate.login(req, res, result => {
    if (result.loggedIn === false) {
        // Login failed
        res.redirect('/authenticate')
    } else if (result.loggedIn === true) {
        // Login successful
        res.redirect('/authenticate')
    } else {
        // Unknown error
        console.log('Server error')
    }
}))
router.get('/authenticate/logout', (req, res) => ForumLab.users.authenticate.logout(req, res, () => {
    res.redirect('/authenticate')
}))


module.exports = router