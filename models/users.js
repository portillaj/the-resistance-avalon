const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")
let SALT_WORK_FACTOR = 10

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true}
})

userSchema.pre("save", function (next) {
    let user = this;
    if (user.isModified("password") || user.isNew) {
        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                console.warn({plain: user.password, hash: hash});
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password.hash, function(err, match) {
        if (err) return callback(err);
        callback(null, match);
    });
}

const User = mongoose.model('User', userSchema);

module.exports = User;