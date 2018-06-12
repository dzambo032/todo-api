const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove() - you can't pass empty argument and expect everything to be removed
// Todo.remove({}) - this is the way, you have to pass empty object

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove('5b1fa321e7179a589280040e').then((todo) => {
//     console.log(todo);
// });