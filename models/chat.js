const mongoose = require('mongoose');

/* The code is defining a Mongoose schema for a chat message. */
const chatSchema = new mongoose.Schema({
      role: {
        type: String,
        enum: ['customer','assistant'],
        required: true
      },
      message: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Chat', chatSchema);