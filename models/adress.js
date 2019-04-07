const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/adress_db';
mongoose.connect(mongoDB);

const { Schema } = mongoose;

const AdressModelSchema = new Schema({
  // город доставки
  adress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 300,
    trim: true,
  },
  // // улица доставки
  // street: {
  //   type: String,
  //   required: true,
  //   minlength: 5,
  //   maxlength: 30,
  //   trim: true,
  // },
  // // номер дома доставки
  // house: {
  //   type: Number,
  //   required: true,
  //   minlength: 1,
  //   maxlength: 10,
  // },
  // // номер квартиры доставки
  // flat: {
  //   type: Number,
  //   required: true,
  //   minlength: 1,
  //   maxlength: 10,
  // },
});

const AdressModel = mongoose.model('AdressModel', AdressModelSchema);

module.exports = AdressModel;
