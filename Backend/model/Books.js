const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    notes:{type:String,required:true},
    user:{type:String,required:true}
})
const BooksModel = mongoose.model('Create',bookSchema)
module.exports = BooksModel