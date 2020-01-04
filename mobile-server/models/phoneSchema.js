const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = new Schema({
    "companyName": {
        type: String,
        required: true
    },
    "modelNumber": {
        type: String,
        required: true
    },
    "quantity": {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Phone',phoneSchema);