const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58f87d2c3a639a331c674fcc';

/*
    Todo.find({
        _id: id
    }).then((todos) => {
        console.log('Todos', todos);
    });

    Todo.findOne({
        _id: id
    }).then((todo) => {
        console.log('Todo', todo);
    });
*/


// if(!ObjectID.isValid(id)) {
//     return console.log('Id is not valid');
// }

/*
    Todo.findById(id)
        .then((todo) => { 
            if(!todo){
                return console.log('Id not found');
            }
            console.log('Todo by id', todo);
        }).catch((err) => {
            console.log(err);
        });
*/

var id = '58f866f7012d13295066b60c';

// if(!ObjectID.isValid(id)) {
//     return console.log('Id is not valid');
// }

User.findById(id)
    .then((user) => { 
        if(!user){
            return console.log('Unable to find user');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).catch((err) => {
        console.log(err);
    });