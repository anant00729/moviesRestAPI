const express = require('express')
const Movie = require('../schema/Movie')
const route = express.Router()
const mongoose = require('mongoose')


route.get('/getAllMovies', async (req,res)=>{
    try{
        const movieList = await Movie.find().exec()
        return res.status(200).json({ status : true ,  movieList })
    }catch(err) {
        return res.status(400).json({ status : false , message : err.message})
    }
    
})

route.post('/insertMovie', async (req,res)=> {
    const title = req.body.title
    const director = req.body.director
    const rating = req.body.rating
    const genre = req.body.genre
    const summary = req.body.summary
    const duration = req.body.duration
    const certification = req.body.certification
    const year = req.body.year
    const bannerImage = req.body.bannerImage
    const thumbnailImage = req.body.thumbnailImage
    



    let m = new Movie({

        _id : mongoose.Types.ObjectId(),
        title,director,rating,genre,summary,duration,certification,year,bannerImage,thumbnailImage

    })

    try{
        const savedMovie = await m.save()
        return res.status(200).json({status : true , savedMovie : savedMovie})
    }catch(err) {
        return res.status(400).json({status : false , message : err.message})
    }
    
})


module.exports = route
