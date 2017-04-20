const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

//Todo.findAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('58f8bb6af3d820442f399c36').then((todo) => {
    console.log(todo);
});