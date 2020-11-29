
//model
const TodoTask = require('../models/ToDoTask')


exports.postToDoTask = async (req, res, next) => {
    const todoTask = new TodoTask({
        content: req.body.content
    })
    try {
        await todoTask.save()
        res.redirect('/')
    } catch (err) {
        res.redirect('/')
    }
}

exports.getToDoTask = (req, res, next) => {
    TodoTask.find({}, (err, tasks) => {
        res.render('todo', { todoTasks: tasks })
    })
}

exports.getEditTask = (req, res, next) => {
    const id = req.params.id
    TodoTask.find({}, (err, tasks) => {
        res.render('todoEdit', { todoTasks: tasks, idTask: id })
    })
}

exports.postEditTask = (req, res, next) => {
    const id = req.params.id
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
        if (err) return res.send(500, err)
        res.redirect('/')
    })
}

exports.getRemoveTask = (req, res, next) => {
    const id = req.params.id
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err)
        res.redirect('/')
    })
}