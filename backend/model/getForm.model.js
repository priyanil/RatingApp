const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const  formSchema = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('form', formSchema, 'forms');