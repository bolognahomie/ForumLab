const User = require('../models/User.js')
const moment = require('moment')
const md5 = require('md5')

const ForumLab = {
    user(req, res, cb) {
        if (req.session.loggedIn){
            User.findById(req.session.userId)
                .then(currentUser => {
                    cb({loggedIn: true, info: currentUser})
                })
                .catch(e => console.log(e))
        }else{
            cb({loggedIn: false, info: null})
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

            },
            login(req, res, cb) {
                User.findOne({username_lower: req.body.username.toLowerCase(), password: md5(req.body.password)})
                    .then(result => {
                        if (result==null){
                            // Login failed
                            cb({loggedIn: false})
                        }else{
                            // Login successful
                            req.session.loggedIn=true
                            req.session.userId=result._id
                            cb({loggedIn: true})
                        }
                    })
                    .catch(e => console.log(e))
            },
            logout(req, res, cb) {
                req.session=null
                cb({loggedIn:false})
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