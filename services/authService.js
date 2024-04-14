const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("../lib/jsonwebtoken");
const SECRET = "13245sfsd5f45s6f4sfes5f4re56s4f5e6s4fesf"

exports.register = async (userData) => {
    
    if (userData.password !== userData.rePassword){
        throw new Error("Passwords do not match")
    }

    const user = await User.findOne({email: userData.email})
    if (user) {
        throw new Error("User with this email already exists")
    }
    return User.create(userData)};


exports.login = async ({email, password}) => {
    // get user from db
    const user = await User.findOne({email})
    if (!user){
        throw new Error("User or password is invalid")
    }
    // check password
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
        throw new Error("User or password is invalid")
    }

    // generate token
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: "2h"})

    // return token
    return token;
}