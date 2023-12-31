const { Todo } = require('../models/model')

const todoController = {

    // [GET] ALL TODO
    getData: async (req, res) => {
        try {
            const getData = await Todo.find();
            res.status(200).json(getData)
        } catch (error) {
            console.log('============= error', error)
            res.status(500).json(error)
        }
    },

    // [GET] A TODO 
    getTodo: async (req, res) => {
        try {
            const todo = await Todo.findById(req.params.id)
            res.status(200).json(todo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // [POST] ADD TODO 
    addTodo: async (req, res) => {
        try {
            const newTodo = new Todo(req.body)
            const saveTodo = await newTodo.save()
            res.status(200).json(saveTodo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // [PUT] UPDATE TODO 
    updateTodo: async (req, res) => {
        try {
            const todo = await Todo.findById(req.params.id)
            await todo.updateOne({ $set: req.body })
            res.status(200).json(" update sucess")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //[DELETE] DELETE TODO
    deleteTodo: async (req, res) => {
        try {
            const todoId = req.params.id;
            const deletedTodo = await Todo.findByIdAndRemove(todoId);

            if (!deletedTodo) {
                return res.status(404).json({ error: 'Todo not found' });
            }

            return res.json({ message: 'Todo deleted successfully' });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = todoController