let Entry = require('../models/entry')

module.exports = {
    create,
    journalEntries
}

async function create(req, res) {
    console.log('user: ', req.user)
    try {
        await Entry.create(req.body)
        journalEntries(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function journalEntries(req, res) {
    const entries = await Entry.find({})
        .sort({date: 1})
    res.json(entries)
}