var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then((doc) => {
            res.status(200).send(doc);
        },(err) => {
            res.status(400).send(err);
        });

});

app.listen(port, () => {
    console.log(`Started on port ${port}`)
});


module.exports = {app};


/*
    var newTodo = new Todo({
        text: 'Cooked dinner'
    });

    newTodo.save()
        .then((doc) => {
            console.log('Saved todo', doc);
        }, (err) => {
            console.log('Unable to save todo')
        });

    var otherTodo = new Todo({
        text: 'Somethng to do'
    });

    otherTodo.save()
        .then((doc) => {
            console.log('Saved todo', doc);
        }, (err) => {
            console.log('Unable to save todo')
        });
    var newUser = new User({
        email: 'test@test.com'
    });

    newUser.save()
        .then((doc) => {
            console.log('Saved user', doc);
        }, (err) => {
            console.log('Unable to save user')       
        });
*/

