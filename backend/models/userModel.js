const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: {
        Type: String,
        required: true
    },
    email: {
        Type: String,
        required: true
    },
    password: {
        Type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
})

const User = mongoose.model("User", userModel);

module.exports = User;