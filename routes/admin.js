// Express Router
const router = require('express').Router()

// Packages
const cookieSession = require('cookie-session')
const ForumLab = require('../controllers/ForumLab.js')
const fileUpload = require('express-fileupload')

router.use(cookieSession({
    name: 'session',
    secret: 'RECORE_CLIENT_SESSION_643563758568568'
}))
router.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

router.get('/', (req, res) => ForumLab.user(req, res, user => {
    if (user.loggedIn === true) {
        // Check if user is admin
        if (user.info.usergroups.includes(0)) {
            res.render('admin-home', { user })
        } else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}))
router.get('/forums', (req, res) => ForumLab.user(req, res, user => {
    if (user.loggedIn === true) {
        // Check if user is admin
        if (user.info.usergroups.includes(0)) {
                ForumLab.assets.iconPacks(req, res, packs => {
                    console.log(packs)
                    res.render('admin-forums', { user, packs })
                })
        } else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}))


// CRUD
// router.post('/upload/icon-pack', (req, res) => {
//     console.log(req.files.packzip)
// })
router.post('/upload/icon-pack', (req, res) => ForumLab.upload.iconPack(req, res))


module.exports = router