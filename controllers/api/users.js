const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

async function create(req, res) {
// just for right now I want to see if this is connected 
    try {
        const user = await User.create(req.body)

        const token = createJWT(user)

        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}

async function logIn(req, res) {
    try {
        // get the user that's trying to log in
        const user = await User.findOne({ email: req.body.email})
        if (!user) throw new Error()
        // check if the password is valid
        const passwordsMatch = bcrypt.compare(req.body.password, user.password)
        // if so create a JWT and send it back
        if (passwordsMatch) {
            res.json(createJWT(user))
        } else {
            throw new Error()
        }
        // if not throw an error
    } catch {
        res.status(400).json('Bad Credentials')
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

module.exports = {
    create,
    logIn,
    checkToken,
}
