const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema(
    {
        Intensity : { type: Number, required: false, unique: false },
        Likelihood : { type: Number, required: false, unique: false },
        Relevance : { type: Number, required: false, unique: false },
        Year : { type: String, required: false, unique: false },
        Country : { type: String, required: false, unique: false },
        Topic : { type: String, required: false, unique: false },
        Region : { type: String, required: false, unique: false },
        City : { type: String, required: false, unique: false },
    },
    {collection: 'data'}

)
const model = mongoose.model('dataSchema', dataSchema)
module.exports = model
