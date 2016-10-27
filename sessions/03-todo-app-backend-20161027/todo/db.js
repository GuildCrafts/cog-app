const TaskTable = []

class Task {
  constructor({id, text, completed, due_date, completed_date, owner}) {
    this.id = id
    this.text = text
    this.completed = completed
    this.due_date = due_date
    this.completed_date = completed_date
    this.owner = owner
  }
}

TaskTable.push(new Task({id: 1, text: "Walk the dog"}))
TaskTable.push(new Task({id: 2, text: "Buy dinner"}))

module.exports = { tasks: TaskTable }
