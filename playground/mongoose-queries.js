const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// var id = '5942752d1f13a400bc2a448011';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '593fe03bdec5133380c129a1';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}, (e) => {
  console.log(e);
}).catch((e) => console.log(e));
