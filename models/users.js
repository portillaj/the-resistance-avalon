const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: [{ type: String, required: true }],
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true}
})

const User = mongoose.model('User', usersSchema);

module.exports = User;