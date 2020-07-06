const User = require('../models/User.js')
const IconPack = require('../models/IconPack.js')
const Forum = require('../models/Forum.js')
const Category = require('../models/Category.js')
const fs = require('fs')
const { join } = require('path')
const moment = require('moment')
const md5 = require('md5')
const unzip = require('node-unzip-2')



const ForumLab = {
    user(req, res, cb) {
        if (req.session.loggedIn) {
            User.findById(req.session.userId)
                .then(currentUser => {
                    cb({ loggedIn: true, info: currentUser })
                })
                .catch(e => console.log(e))
        } else {
            cb({ loggedIn: false, info: null })
        }
    },
    users: {
        currentUser: {
            updateProfile(req, res, cb) {

            },
            updateAccount(req, res, cb) {

            }
        },
        authenticate: {
            register(req, res, cb) {
                if (req.body.password === req.body.password2) {
                    // Passwords match, check username availability
                    User.findOne({ username_lower: req.body.username.toLowerCase() })
                        .then(result => {
                            if (result == null) {
                                // Username is available, check email
                                User.findOne({ email: req.body.email })
                                    .then(result2 => {
                                        if (result2 == null) {
                                            // Email available, register user
                                            User.create({
                                                username: req.body.username,
                                                username_lower: req.body.username.toLowerCase(),
                                                email: req.body.email,
                                                password: md5(req.body.password),
                                                created: moment().unix(),
                                                updated: moment().unix()
                                            })
                                                .then(newUser => {
                                                    cb({ result: true, reason: 'Registration successful! You may now login.' })
                                                })
                                                .catch(e => console.log(e))
                                        } else {
                                            // Email is taken
                                            cb({ result: false, reason: 'Email is already registered.' })
                                        }
                                    })
                                    .catch(e => console.log(e))
                            } else {
                                // Username is taken
                                cb({ result: false, reason: 'Username is not available.' })
                            }
                        })
                        .catch(e => console.log(e))
                } else {
                    // passowrds do not match
                    cb({ result: false, reason: 'Passwords do not match.' })
                }
            },
            login(req, res, cb) {
                User.findOne({ username_lower: req.body.username.toLowerCase(), password: md5(req.body.password) })
                    .then(result => {
                        if (result == null) {
                            // Login failed
                            cb({ loggedIn: false })
                        } else {
                            // Login successful
                            req.session.loggedIn = true
                            req.session.userId = result._id
                            cb({ loggedIn: true })
                        }
                    })
                    .catch(e => console.log(e))
            },
            logout(req, res, cb) {
                req.session = null
                cb({ loggedIn: false })
            }
        },
        findById(req, res, id, cb) {
            User.findById(id)
                .then(result => {
                    cb(result)
                })
                .catch(e => console.log(e))
        },
        findByUsername(req, res, username, cb) {
            User.findOne({ username_lower: username.toLowerCase() })
                .then(result => {
                    cb(result)
                })
                .catch(e => console.log(e))
        },
        findAll(req, res, cb) {
            User.find()
                .then(result => {
                    cb(result)
                })
                .catch(e => console.log(e))
        }
    },
    assets: {
        iconPacks(cb) {
            IconPack.find()
                .then(packs => {
                    cb(packs)
                })
                .catch(e => console.log(e))
        }
    },
    upload: {
        iconPack(req, res) {
            let newPackZip = req.files.packzip;
            let newPackName = req.files.packzip.name.split(".").shift()

            let zipPath = join(__dirname, `../public/client/assets/images/icons/packs/${newPackZip.name}`)
            let folderPath = join(__dirname, `../public/client/assets/images/icons/packs/${newPackName}`)

            newPackZip.mv(join(__dirname, `../public/client/assets/images/icons/packs/${newPackZip.name}`), function (err) {
                if (err)
                    return res.status(500).send(err);
                fs.createReadStream(zipPath)
                    .pipe(unzip.Extract({ path: folderPath }))
                    .on('close', () => {
                        var iconArray = fs.readdirSync(folderPath)
                        fs.unlink(zipPath, () => {
                            IconPack.create({ name: newPackName, icons: iconArray.map(icon => `${newPackName}/${icon}`) })
                                .then(newPack => {
                                    res.redirect('/admin/forums')
                                })
                                .catch(e => console.error(e))
                        })
                    });
            })
        }
    },
    forums: {
        structure: {
            raw(req, res, cb){
                let returnJson = {ids: []}
                Forum.find()
                    .then(forums => {
                        returnJson.forums = forums
                        forums.forEach(forum => {
                            returnJson.ids.push(forum._id)
                        })
                        Category.find()
                            .then(cats => {
                                returnJson.cats = cats
                                cats.forEach(cat => {
                                    returnJson.ids.push(cat._id)
                                })
                                cb(returnJson)
                            })
                            .catch(e => console.error(e))
                    })
                    .catch(e => console.error(e))
            }
        },
        categories: {
            new(req, res, cb) {
                Category.create({
                    menuName: req.body.menuname,
                    icon: req.body.icon
                })
                    .then(newCat => {
                        cb(newCat)
                    })
                    .catch(e => console.error(e))
            }
        },
        new(req, res, cb) {
            Forum.create({
                menuName: req.body.menuname,
                headerName: req.body.headername,
                icon: req.body.icon
            })
                .then(newForum => {
                    cb(newForum)
                })
                .catch(e => console.error(e))
        }
    }
}

module.exports = ForumLab