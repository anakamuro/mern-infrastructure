const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const SALT_ROUNDS = 6

const userInfo = (doc) => {
    return doc.toUpperCase()
}

const userSchema = new Schema({
    name: {
        type: String,
         required: true
    }, 
    email: {
        type: String,
        unique: true, 
        trim: true, 
        lowetcase: true, 
        required: true
    }, 
    password: {
        type: String, 
        trim: true,
        minLength: 3, 
        required: true
    }, 
}, {
    timestamp: true, 
    toJSON: {
        transform: function(doc, user){
            delete user.password
            return user
        }
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,
         SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('User', userSchema)