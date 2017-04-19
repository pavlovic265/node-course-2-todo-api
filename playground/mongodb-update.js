/*
    // Object destucturing, omogucava nam da izvlacimo prpertije koje prave varijable 
    var user = {name: 'Marko', age: 25};
    var {name} = user; // Da izvucemo name iz user objekta
    console.log(name);
*/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//na production verziji moze da bude heroku, amazon ili tako neki url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //findeOneAndUpdate
    db.collection('Todos')
        // .findOneAndUpdate({
        //     _id: new ObjectID('58f7175e9227dd53bd7e09cf')
        // }, {
        //     $set : {
        //         completed: true
        //     }
        // }, {
        //     returnOriginal: false
        // })
        // .then((result) => {
        //     console.log(result);
        // }, (err) => {
        //     console.log('Unable to update todo', err);
        // });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("58f712999227dd53bd7e09c7")
        }, {
            $set: {
                name: 'Marko'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Unable to update user', err);
        });

    // db.close();
});