const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
    date: Number,
    past: String,
    present: String, 
    future: String,
    entry: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)