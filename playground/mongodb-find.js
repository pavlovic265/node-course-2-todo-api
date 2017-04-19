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

    // db.collection('Todos').find() // -> Vraca cursor, a.k.a. pointer na nase dokumente
    //.toArray() // -> Vraca promise
    // db.collection('Todos')
    //     // .find({completed: false})
    //     .find({
    //         _id: new ObjectID('58f70f6d9227dd53bd7e09c6')
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));

    //     }, (err) => {
    //         console.log('Unable to fatch todos', err);
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to count todos', err);
    //     });

    db.collection('Users')
        .find({
            name: 'Marko'
        })
        .toArray()
        .then((users) => {
            console.log('Users');
            console.log(JSON.stringify(users, undefined, 2));

        }, (err) => {
            console.log('Unable to fatch users', err);
        });
    db.close();
});