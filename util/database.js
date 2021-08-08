const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://admin:vlpt33uwdeHoLCrU@cluster0.6jb10.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
