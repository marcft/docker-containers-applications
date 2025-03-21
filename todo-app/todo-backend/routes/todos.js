const express = require('express')
const { Todo } = require('../mongo')
const redis = require('../redis')
const router = express.Router()

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: req.body.done || false,
  })

  let count = await redis.getAsync('added_todos')
  count = count ? parseInt(count) : 0
  await redis.setAsync('added_todos', (count + 1).toString())

  res.send(todo)
})

router.get('/statistics', async (req, res) => {
  let count = await redis.getAsync('added_todos')
  count = count ? parseInt(count) : 0
  res.send({ added_todos: count })
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo)
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  req.todo.text = req.body.text
  req.todo.done = req.body.done
  // Saves the changes to the element with todo.id
  await req.todo.save()
  res.send(req.todo)
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
