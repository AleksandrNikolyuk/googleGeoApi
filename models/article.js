const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/magazine';
mongoose.connect(mongoDB);

const { Schema } = mongoose;

const ArticleModelSchema = new Schema({
  // название статьи
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 250,
    trim: true,
  },
  // содержание статьи
  text: {
    type: String,
    required: true,
  },
  // ссылка на статью
  url: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    unique: true,
  },
});

const ArticleModel = mongoose.model('ArticleModel', ArticleModelSchema);

module.exports = ArticleModel;
