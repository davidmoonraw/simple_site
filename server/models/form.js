const { Schema, model } = require('mongoose');

const form = new Schema({
    email: { type: String, required: true },
    text: { type: String, required: true }
}, {
    collection: 'form' // Explicitly set the collection name and avoid pluralize
  });

const Form = model('Form', form);
module.exports = Form;