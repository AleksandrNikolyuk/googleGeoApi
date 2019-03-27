const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/magazine';
mongoose.connect(mongoDB);

const { Schema } = mongoose;

const GoodsModelSchema = new Schema({
  // город доставки
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  // номер дома доставки
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 300,
  },
  // Ссылка на картинку
  image: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 180,
    unique: true,
  },
  // номер квартиры доставки
  price: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
});

const GoodsModel = mongoose.model('GoodsModel', GoodsModelSchema);

module.exports = GoodsModel;
