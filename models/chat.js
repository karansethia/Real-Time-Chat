const mongoose = require('mongoose');

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