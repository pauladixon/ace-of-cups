let Entry = require('../models/entry')

module.exports = {
    create,
    journalEntries,
    delete: deleteOne,
    update
}

async function journalEntries(req, res) {
    req.body.user = req.user._id
    const entries = await Entry.find({user: req.user._id})
    res.status(200).json(entries);
}

async function create(req, res) {
    req.body.user = req.user
    const entry = await Entry.create(req.body)
    res.status(201).json(entry)
}

async function deleteOne(req, res) {
    try{
        const deletedEntry = await Entry.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedEntry)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function update(req, res) {
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedEntry)
    }
    catch(err){
        res.status(500).json(err)
    }
}