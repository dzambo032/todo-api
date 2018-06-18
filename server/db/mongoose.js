const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dzambo032:Nikola 12345@ds263640.mlab.com:63640/todo-api-v2' || 'mongodb://localhost:27017/TodoAppV2'); 
// mongoose.connect('mongodb://localhost/TodoApp');

module.exports = { mongoose };