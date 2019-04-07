// const mongoose = require('mongoose');

// const mongoDB = 'mongodb://127.0.0.1/magazine';
// mongoose.connect(mongoDB);

// const { Schema } = mongoose;

// const UserModelSchema = new Schema({
//   // имя пользователя
//   name: {
//     type: String,
//     required: true,
//     minlength: 1,
//     maxlength: 30,
//     trim: true,
//   },
//   // фамилия пользователя
//   surname: {
//     type: String,
//     required: true,
//     minlength: 1,
//     maxlength: 30,
//     trim: true,
//   },
//   // телефон пользователя
//   phone: {
//     type: String,
//     required: true,
//     minlength: 8,
//     maxlength: 30,
//     trim: true,
//   },
//   // адресс пользователя
//   adress: {
//     type: Schema.Types.ObjectId,
//     ref: 'AdressModel',
//   },
//   // блокировка user
//   blocked: {
//     type: Boolean,
//     default: false,
//   },
// });

// const UserModel = mongoose.model('UserModel', UserModelSchema);

// module.exports = UserModel;
