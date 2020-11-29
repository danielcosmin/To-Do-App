const express = require('express')
const router = express.Router()

const toDoController = require('../controllers/toDoController')


router.get('/', toDoController.getToDoTask)

router.post('/todo', toDoController.postToDoTask)

router.get('/edit/:id', toDoController.getEditTask)

router.post('/edit/:id', toDoController.postEditTask)

router.get('/remove/:id', toDoController.getRemoveTask)


module.exports = router