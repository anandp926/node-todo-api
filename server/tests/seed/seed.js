const { ObjectId } = require('mongodb')
const { Todo } = require('./../../models/todo')
const {User} = require('./../../models/user')
const jwt = require('jsonwebtoken')

const userONeId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id: userONeId,
    email: 'sanand926@gmail.com',
    password: 'Abc123@',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userONeId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
},{
    _id: userTwoId,
    email: 'a@g.com',
    password: 'abc123!',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}]

const todos = [{
    _id: new ObjectId(),
    text: 'First test todo',
    _creator: userONeId
}, {
    _id: new ObjectId(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.deleteMany().then(() => {
        return Todo.insertMany(todos)
    }).then(() => done())
}

const populateUsers = (done) => {
    User.deleteMany().then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done())
}

module.exports = { todos, populateTodos, users, populateUsers }