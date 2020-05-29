const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entrySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    past: {
        type: String,
        required: true
    },
    present: {
        type: String, 
        required: true
    },
    future: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)