const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
// const {User} = require('./../server');

const todos = [{
    text: 'First test todo'
}, {
    text: 'Second test todo'
}]

//Priperma baze pre testiranja
beforeEach((done) => {
    Todo.remove({})
        .then(() => {
            return Todo.insertMany(todos)
        }).then(() => done());
});

describe('POST /todos', () => {
    it('should create new todo', (done) => {
        var text = 'Some test text';

        //Testiranje request-a
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text)
                    .toBe(text);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }
                //Testiranje baze
                //Kako baza treba da bude posle izvresnog requesta
                Todo.find({text})
                    .then((todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    }).catch((err) => done(err));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err) {
                    return done(err);
                }
                Todo.find()
                    .then((todos) => {
                        expect(todos.length).toBe(2);
                        done()
                    }).catch((err) => done(err));
            })
    })
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    })
})
