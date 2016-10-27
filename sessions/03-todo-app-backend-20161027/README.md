# To-do list backend (goal #90)

- Practitioner: @tannerwelsh
- Format: remote
- Date: 2016/10/27

### Task

Starting to work on the "backend-only to do list app", covering application design, RESTful routes, and iterative development of a web server.

Goal: https://github.com/GuildCrafts/web-development-js/issues/90

#### Tools & concepts used
- Node.js
- Express

#### Skills covered
- data model design
- web API design, scaffolding, and development

### Preparation

Review and/or try the goal so that you have context.

Read up on Express: http://expressjs.com/.

Consider if this problem is in your ZPD (if not, then this session might not be as useful/interesting to you.

## Practice / Observation

Video: https://shereef.wistia.com/medias/458i8ecq8p
Code: [todo](./todo) directory

### Notes

#### Data Model

```js
// pseudocode for brainstorming the data model
class User {
  name String
  id String
  username String
  password String
  email String
}

class Task {
  id String
  text String
  completed Boolean
  due_date Date
  completed_date Date
  owner User
}

class List {
  name String
  tasks Array[<Task>]
  owner User
}
```


#### RESTful Web API

http://localhost:3000/

- `/tasks` => Tasks
  - `GET /` => Find all tasks X
  - `GET /:id` => Get task with `:id`
  - `PUT /:id` Update
  - `POST /` => Create
  - `DELETE /:id` Delete
- `/users` => Users
  - `GET /` => Find all users
  - `GET /:username` => Get user with `:username`
  - `PUT /:username` Update
  - `POST /` => Create
  - `DELETE /:username` Delete
- `/lists` => Lists
  - `GET /` => Find all lists
  - `GET /:name` => Get list with `:name`
  - `PUT /:name` Update
  - `POST /` => Create
  - `DELETE /:name` Delete

#### API Test

HTTP GET /tasks/ => JSON array of task objects
