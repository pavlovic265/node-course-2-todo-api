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

    //deleteMeny
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete todos', err);
    //     });

    //deleteOne
    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    //     });

    //findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete todo', err);
    //     });
    

    // db.collection('Users')
    //     .deleteMany({name: 'Marko'})
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete users', err);
    //     });

    // db.collection('Users')
    //     .findOneAndDelete({
    //         _id: new ObjectID("58f712a39227dd53bd7e09c8")
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to delete user', err);
    //     });

    // db.close();
});