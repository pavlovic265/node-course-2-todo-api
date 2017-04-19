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

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     //.ops sadrzace sve dokumente koje smo uneli
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Marko',
    //     age: 26,
    //     location: 'Belgrade'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     // console.log(result.ops[0]._id);
    //     // console.log(result.ops[0]._id.getTimestemp()); // vraca timestep kada je objekat napravljen
    // });

    db.close();
});