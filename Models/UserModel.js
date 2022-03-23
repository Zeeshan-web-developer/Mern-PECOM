const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastName: {
        type: String,
        required: true,
        minlength:[3,"Last Name should be atleast 3 characters long"]

    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists']
    },
    phone: {
        type: String,
        required: true,
        unique: [true, 'Phone number already exists'],
        minlength: [10, 'Phone number must be atleast 10 characters long'],
        maxlength: [13, 'Phone number must be atmost 13 characters long']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 characters long'],
    },
    state: {
        type: String,
        required: true  
    },
    district: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
   
});
const UserModel = mongoose.model('users', UserSchema);  // collection name is 'users'
module.exports = UserModel;