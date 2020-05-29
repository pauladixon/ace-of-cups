let Entry = require('../models/entry')

module.exports = {
    create,
    journalEntries,
    delete: deleteOne
}

async function create(req, res) {
    req.body.user = req.user._id
    try {
        await Entry.create(req.body)
        journalEntries(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function journalEntries(req, res) {
    req.body.user = req.user._id
    const entries = await Entry.find({user: req.user._id})
    res.json(entries)
}

async function deleteOne(req, res) {
    req.body.user = req.user._id
    const deletedEntry = await Entry.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedEntry)
}