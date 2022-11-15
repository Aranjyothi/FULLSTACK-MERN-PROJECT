const BooksModel = require('../model/Books')

const index = async (req,res) =>{
    try{
        const foundCurrentUserbook = await BooksModel.find({user: req.user})
        res.status(200).json({create: foundCurrentUserbook})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const add = async(req,res) =>{
    try{
        const createBookForCurrentUser = await BooksModel.create(req.body)
        res.status(200).json({createuser:createBookForCurrentUser})
        // console.log(create)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const edit = async(req,res)=>{
    try{
        const editForCurrentUser = await BooksModel.edit(req.body)
        res.status(200).json({edit:editForCurrentUser})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const clear = async(req,res)=>{
    try{
        const deleteCurrentUser = await BooksModel.deleteOne(req.body)
        res.status(200).json({delete:deleteCurrentUser})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const clearAll = async (req,res)=>{
    try{
        const deleteAllUsers = await BooksModel.deleteall(req.body)
    res.status(200).json({deleteall:deleteAllUsers})
    }catch(errpr){
        res.status(400).json({error:error.message})

    }
}




module.exports = {
    index,
    add,
    edit,
    clear,
    clearAll
}