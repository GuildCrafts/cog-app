## Description

Create the backend of a to do list app.

## Context

Dive deeply into the dark ocean of the backend.

## Specifications

- [ ] Design data model
- [ ] Implement web API
  - [ ] Start a server listening on a specified port
  - [ ] Users
    - [ ] Get
    - [ ] Update
    - [ ] Create
    - [ ] Delete
    - [ ] Find all
  - [ ] Lists
    - [ ] Get
    - [ ] Create
    - [ ] Update
    - [ ] Delete
    - [ ] Find all
  - [ ] List Items
    - [ ] Get
    - [ ] Create
    - [ ] Update
    - [ ] Delete
    - [ ] Find all
- [ ] Implement tests
- [ ] Deploy to Heroku
- [ ] Create documentation
  - [ ] Local environment setup
  - [ ] Deployment
  - [ ] Testing
  - [ ] Licensing (OSS, e.g. MIT)

## Data Model

```js
class User () {
  name String
  id String
  username String
  password String
  email String
}

class Task () {
  id String
  text String
  completed Boolean
  due_date Date
  completed_date Date
  owner User
}

class List () {
  name String
  tasks Array[<Task>]
  owner User
}
```


## RESTful Web API

http://todoli.st/

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

### API Test

HTTP GET /tasks/ => JSON array of task objects
