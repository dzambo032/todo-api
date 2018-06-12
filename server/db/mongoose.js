const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://dzambo032:Nikola 12345@ds255970.mlab.com:55970/todo-api' || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost/TodoApp');

module.exports = {mongoose};