const User = require('../models/User.js')
const moment = require('moment')
const md5 = require('md5')

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
                                        if (result2==null){
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
                                                    cb({result: true, reason: 'Registration successful! You may now login.'})
                                                })
                                                .catch(e => console.log(e))
                                        }else{
                                            // Email is taken
                                            cb({result: false, reason: 'Email is already registered.'})
                                        }
                                    })
                                    .catch(e => console.log(e))
                            } else {
                                // Username is taken
                                cb({result: false, reason: 'Username is not available.'})
                            }
                        })
                        .catch(e => console.log(e))
                } else {
                    // passowrds do not match
                    cb({result: false, reason: 'Passwords do not match.'})
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

        },
        findByUsername(req, res, username, cb) {

        },
        findAll(req, res, cb) {

        }
    }
}

module.exports = ForumLab