module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/my_db',
    connect: {
      config: {
        autoIndex: false,
      },
      useNewUrlParser: true,
    },
  },
};
