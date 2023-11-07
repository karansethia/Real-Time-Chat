const mongoose = require('mongoose');

/**
 * The function "connect" connects to a MongoDB database using the provided URL.
 * @returns The `connect` function is returning the result of `mongoose.connect(url)`.
 */
const connect = url => {
  return mongoose.connect(url);
}

module.exports = connect