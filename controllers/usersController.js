const db = require('../models')

module.exports = {
    createUser: function (req, res) {
        db.User.create(req.body, function (err, data) {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (data) {
                res.json('Success')
            }
        })
    },
    signIn: function (req, res) {
        let username = req.query.username
        let password = req.query.password
        db.User.findOne({
            username: username,
            password: password
        }).then(err => {
            if (err) {
                console.log(err)
            }
            res.send('Success')
        })
    }
}