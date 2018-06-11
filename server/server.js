const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());  // app.use() is taking a middleware

// POST ROUTE
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    })
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET ROUTE
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}            // bolje poslati objekat nego niz, jer mozemo da dodamo neke nove propertye koji su nam potrebani
    );}, (e) => {
        res.status(400).send(e);
    })
});

// GET /todos/:id

app.get('/todos/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }
    Todo.findById(req.params.id).then((todo) => {
        if(!todo){
            return res.status(404).send('ID doesn\'nt exist')
        }
        res.send({todo})
    }).catch((e) => res.status(400).send(e))
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};