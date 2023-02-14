const express = require('express')
const router = express.Router()

const notesCtrl = require('../../controllers/api/notes')

//create
router.post('/', notesCtrl.create)
//index
router.get('/', notesCtrl.index)

module.exports = router
