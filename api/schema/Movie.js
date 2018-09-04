const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    director : String,
    rating : Number,
    genre : String,
    summary : String,
    duration : String,
    certification : String,
    year : Number,
    bannerImage : String,
    thumbnailImage : String
})


module.exports = mongoose.model('movies', movieSchema)