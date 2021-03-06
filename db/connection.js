const mongoose = require('mongoose')
mongoose.Promise = Promise
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost:27017/nyc2022";
}
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`)) //instance is what the database that your are connected to
    .catch(error => console.log('Connection failed!', error))

module.exports = mongoose