const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,  // mora da bude popunjeno
        minlength: 1,   // minimalna duzina stringa 1
        trim: true      // trimuje space na pocetku i kraju
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };















/* var newTodo = new Todo({
    text: 'Jesti jagode'
});

newTodo.save().then((doc) => {
    console.log('saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
}); */

// email - require - trim - string - minlength of 1



/* var newUser = new User({
    email: 'dDzambo@rtch.com      '
});

newUser.save().then((doc) => {
    console.log('saved user', doc)
}, (e) => {
    console.log('Unable to save user')
}); */