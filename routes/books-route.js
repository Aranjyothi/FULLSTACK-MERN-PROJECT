const express = require('express')
const router = express.Router()
const booksctrl = require('../controller/books-controller')

router.get('/index',booksctrl.index)
router.post('/add',booksctrl.add)
router.delete('/clear', booksctrl.clear)
router.put('/edit/:id',booksctrl.update)
router.delete('/clearall', booksctrl.clear)


module.exports = router