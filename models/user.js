const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    } 
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
})


userSchema.virtual("rePassword")
.set(function(value) {
    if (value != this.password) {
        throw new Error("Passwords missmatch");
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;