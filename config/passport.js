let passport = require('passport')
let localStrategy = require('passport-local').Strategy

let db = require('../models')

passport.use(new localStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done) {
        db.Player.findOne({
            where: {
                username: username,
                password: password
            }
        }).then(function(user) {
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username    .'
                })
            } else if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                })
            }
            return done(null, user)
        })
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
})

module.exports = passport