const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
        res.send({ todos })            // bolje poslati objekat nego niz, jer mozemo da dodamo neke nove propertye koji su nam potrebani
    }, (e) => {
        res.status(400).send(e);
    })
});

// GET /todos/:id

app.get('/todos/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }
    Todo.findById(req.params.id)
        .then((todo) => {
            if (!todo) {
                return res.status(404).send('ID doesn\'nt exist')
            }
            res.send({ todo })
        }).catch((e) => res.status(400).send(e))
});

app.delete('/todos/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(req.params.id)
        .then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({ todo })
        })
        .catch((e) => res.status(400).send())
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    })
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User({
        email: body.email,
        password: body.password
    })
    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };