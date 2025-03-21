const mongoose = require('mongoose');

const { MONGO_USER, MONGO_KEY, MONGO_HOSTNAME, MONGO_PORT, MONGO_CONNECTION_FORMAT, MONGO_DB_NAME } = process.env;

const CREDENTIALS = `${MONGO_USER}:${MONGO_KEY}@`;
const URI = `${MONGO_CONNECTION_FORMAT}://${CREDENTIALS}${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_NAME}`;

// IPv4 and db to authenticate
const options = { family: 4, authSource: "admin" }

mongoose.connect(URI, options).then(error => () => console.log('MongoDB connection failed/n', error));

mongoose.connection.on('connected', () => console.log('------MongoDB connected-----'));
mongoose.connection.on('disconnected', () => console.log('----MongoDB disconnected----'));

module.exports = mongoose;