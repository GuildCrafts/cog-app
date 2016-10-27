var express = require('express');
var router = express.Router();

var db = require('../db.js')

/* GET all tasks */
router.get('/', function(req, res, next) {
  res.json({ tasks: db.tasks, success: true });
});

router.get('/:id', function(req, res, next) {
  const taskId = Number(req.params.id)
  const task = db.tasks.find(t => t.id === taskId)

  res.json({ task: task, success: true });
});

router.put('/:id', function(req, res, next) {
  const task =
  // (update task with the req body)

  res.json({ task: task, success: true })
});

router.post('/', function(req, res, next) {
  const task = req.body // create task from req. body
  // add task to db
  db.tasks.push(task)

  res.json({ task: task, success: true })
});

router.delete('/:id', function(req, res, next) {
  // delete task from db
  const task =

  res.json({ task: task, success: true })
});

module.exports = router;
