const mongoose = require('mongoose')
const { Schema } = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    username:{
        type: String
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)