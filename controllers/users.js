const User = require('../models/user')

module.exports = {
    signup
}

async function signup(req, res) {
    const user = new User(req.body)
    try {
        await user.save()
        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
}